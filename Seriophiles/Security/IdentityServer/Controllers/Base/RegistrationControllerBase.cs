using AutoMapper;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers.Base;

public class RegistrationControllerBase : ControllerBase
{
    private readonly ILogger<UserController> _logger;

    private readonly IMapper _mapper;
    private readonly IUserRepository _userManager;
    private readonly IRoleRepository _roleRepository;

    public RegistrationControllerBase(ILogger<UserController> logger, IMapper mapper,
        IUserRepository userManager, IRoleRepository roleRepository)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
        _roleRepository = roleRepository ?? throw new ArgumentNullException(nameof(roleRepository));
    }

    protected async Task<IActionResult> RegisterNewUserWithRoles(NewUserDto newUser, IEnumerable<string> roles)
    {
        var user = _mapper.Map<User>(newUser);
        IdentityResult result = await _userManager.CreateAsync(user);
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
                await _userManager.AddToRoleAsync(user, role);
                _logger.LogInformation("Added role {AddedRole} to user: {Username}", role, user.UserName);
            }
            else
            {
                _logger.LogInformation("The role {NonExistingRole} doesn't exist", role);
            }
        }

        return StatusCode(StatusCodes.Status201Created);
    }
    
}