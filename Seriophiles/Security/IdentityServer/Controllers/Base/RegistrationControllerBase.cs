using AutoMapper;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories;
using IdentityServer.Repositories.Roles;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers.Base;

public class RegistrationControllerBase : ControllerBase
{
    protected readonly ILogger<AuthenticationController> _logger;
    protected readonly IMapper _mapper;
    //napraviti repositorije i servise
    protected readonly UserManager<User> _userManager;
    protected readonly IRoleRepository _roleRepository;

    public RegistrationControllerBase(ILogger<AuthenticationController> logger, IMapper mapper,
        UserManager<User> userManager, IRoleRepository roleRepository)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
        _roleRepository = roleRepository ?? throw new ArgumentNullException(nameof(roleRepository));
    }

    protected async Task<IActionResult> RegisterNewUserWithRoles(NewUserDto newUser, IEnumerable<string> roles)
    {
        var User = _mapper.Map<User>(newUser);
        var result = await _userManager.CreateAsync(User);
        if (!result.Succeeded)
        {
            foreach (var error in result.Errors)
            {
                ModelState.TryAddModelError(error.Code, error.Description);
            }
            _logger.LogError("Failed to add user {NewUser}.", User.UserName);
            return BadRequest(ModelState);
        }

        _logger.LogInformation("Successfully registered user: {NewUser}.", User.UserName);

        foreach (var role in roles)
        {
            var roleExists = await _roleRepository.RoleExistsAsync(role);
            if (roleExists)
            {
                await _userManager.AddToRoleAsync(User, role);
                _logger.LogInformation("Added role {AddedRole} to user: {Username}.", role, User.UserName);
            }
            else
            {
                _logger.LogInformation("The role {NonExistingRole} doesn't exist.", role);
            }
        }

        return StatusCode(StatusCodes.Status201Created);
    }
    
}