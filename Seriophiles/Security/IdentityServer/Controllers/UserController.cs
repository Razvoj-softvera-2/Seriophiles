using AutoMapper;
using IdentityServer.Controllers.Base;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;
using IdentityServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class UserController : RegistrationControllerBase
{
    public UserController(ILogger<UserController> logger, IMapper mapper, IUserRepository userRepository, IRoleRepository roleRepository, IAuthenticationService authService) 
        : base(logger, mapper, userRepository, roleRepository, authService)
    {
    }
    
    [HttpPost("[action]")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Register([FromBody] NewUserDto newUser)
    {
        return await RegisterNewUserWithRoles(newUser, new [] { RolesEnum.User });
    }
    
    
 
}