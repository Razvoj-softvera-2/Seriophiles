using AutoMapper;
using IdentityServer.Controllers.Base;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories;
using IdentityServer.Repositories.Roles;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class AuthenticationController : RegistrationControllerBase
{
    public AuthenticationController(ILogger<AuthenticationController> logger, IMapper mapper, UserManager<User> userManager, IRoleRepository roleRepository) 
        : base(logger, mapper, userManager, roleRepository)
    {
    }

    [HttpPost("[action]")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> RegisterUser([FromBody] NewUserDto newUser)
    {
        return await RegisterNewUserWithRoles(newUser, new [] { RolesEnum.User });
    }
    
    [HttpPost("[action]")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> RegisterAdministrator([FromBody] NewUserDto newUser)
    {
        return await RegisterNewUserWithRoles(newUser, new [] { RolesEnum.Administrator });
    }
}