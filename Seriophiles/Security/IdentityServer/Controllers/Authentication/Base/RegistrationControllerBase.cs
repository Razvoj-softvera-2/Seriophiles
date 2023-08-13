using AutoMapper;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;
using IdentityServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers.Authentication.Base;

public class RegistrationControllerBase : ControllerBase
{
    protected readonly ILogger<AuthenticationUserController> _logger;
    protected readonly IMapper _mapper;
    protected readonly IUserRepository _userRepository;
    protected readonly IRoleRepository _roleRepository;
    protected readonly IAuthenticationService _authService;

    public RegistrationControllerBase(ILogger<AuthenticationUserController> logger, IMapper mapper,
        IUserRepository userRepository, IRoleRepository roleRepository, IAuthenticationService authService )
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        _roleRepository = roleRepository ?? throw new ArgumentNullException(nameof(roleRepository));
        _authService = authService ?? throw new ArgumentNullException(nameof(authService));
    }

    protected async Task<IActionResult> RegisterNewUserWithRoles(NewUserDto newUser, IEnumerable<string> roles)
    {
        var user = _mapper.Map<User>(newUser);
        
        var result = await _userRepository.CreateAsync(user, newUser.Password);
        if (!result.Succeeded)
        {
            foreach (var error in result.Errors)
            {
                ModelState.TryAddModelError(error.Code, error.Description);
            }
            
            _logger.LogInformation("Failed to add user {NewUser}", user.UserName);
            return BadRequest(ModelState);
        }

        _logger.LogInformation("Successfully registered user: {NewUser}", user.UserName);

        foreach (var role in roles)
        {
            var roleExists = await _roleRepository.RoleExistsAsync(role);
            if (roleExists)
            {
                await _userRepository.AddToRoleAsync(user, role);
                _logger.LogInformation("Added role {AddedRole} to user: {Username}", role, user.UserName);
            }
            else
            {
                _logger.LogInformation("The role {NonExistingRole} doesn't exist", role);
            }
        }

        return StatusCode(StatusCodes.Status201Created);
    }

    protected async Task<IActionResult> ValidateUser(UserCredentialsDto userCredentials)
    {
        var user = await _authService.ValidateUser(userCredentials);

        if (user is null)
        {
            _logger.LogWarning("{Login}: Authentication failed. Wrong username or password.", nameof(ValidateUser));
            return Unauthorized();
        }

        return Ok(await _authService.CreateAuthenticationModel(user));
    }

    protected async Task<ActionResult<AuthenticationModel>> RefreshUsersToken(RefreshTokenModel refreshTokenModel)
    {
        var user = await _userRepository.FindByUsernameAsync(refreshTokenModel.UserName);

        if (user is null)
        {
            _logger.LogWarning("{Refresh}: Refreshing token failed. Unknown username {UserName}.", nameof(RefreshUsersToken), refreshTokenModel.UserName);
            return Forbid();
        }

        var refreshToken = user.RefreshTokens.FirstOrDefault(r => r.Token == refreshTokenModel.RefreshToken);

        if (refreshToken is null)
        {
            _logger.LogWarning("{Refresh}: Refreshing token failed. The refresh token is not found.", nameof(RefreshUsersToken));
            return Unauthorized();
        }
        
        if (refreshToken.ExpiryTime < DateTime.Now)
        {
            _logger.LogWarning("{Refresh}: Refreshing token failed. The refresh token is not valid.", nameof(RefreshUsersToken));
            return Unauthorized();
        }

        return Ok(await _authService.CreateAuthenticationModel(user));
    }

    protected async Task<IActionResult> LogoutUser(RefreshTokenModel refreshTokenCredentials)
    {
        var user = await _userRepository.FindByUsernameAsync(refreshTokenCredentials.UserName);
        
        //investigate the possibility of this case
        if (user is null)
        {
            _logger.LogWarning("{Logout}: Logout failed. Unknown username {UserName}.", nameof(LogoutUser), refreshTokenCredentials.UserName);
            return Forbid();
        }

        await _authService.RemoveRefreshToken(user, refreshTokenCredentials.RefreshToken);
        
        return Accepted();
    }
}