using AutoMapper;
using IdentityServer.Controllers.Base;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers;

public class AdministratorController : RegistrationControllerBase
{
    public AdministratorController(ILogger<UserController> logger, IMapper mapper, IUserRepository userManager, IRoleRepository roleRepository) : base(logger, mapper, userManager, roleRepository)
    {
    }
    
    [HttpPost("[action]")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> RegisterAdministrator([FromBody] NewUserDto newUser)
    {
        return await RegisterNewUserWithRoles(newUser, new [] { RolesEnum.Administrator });
    }
}