using AutoMapper;
using IdentityServer.Controllers.Authentication.Base;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;
using IdentityServer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers.Authentication;

[Route("api/v1/[controller]")]
[ApiController]
public class AuthenticationUserController : RegistrationControllerBase
{
    public AuthenticationUserController(ILogger<AuthenticationUserController> logger, IMapper mapper, IUserRepository userRepository, IRoleRepository roleRepository, IAuthenticationService authService) 
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
    
    [HttpPost("[action]")]
    [ProducesResponseType(typeof(AuthenticationModel), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public async Task<IActionResult> Login([FromBody] UserCredentialsDto userCredentials)
    {
        return await ValidateUser(userCredentials);
    }

    [HttpPost("[action]")]
    [ProducesResponseType(typeof(AuthenticationModel), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    public async Task<ActionResult<AuthenticationModel>> Refresh([FromBody] RefreshTokenModel refreshTokenCredentials)
    {
        return await RefreshUsersToken(refreshTokenCredentials);
    }

    [Authorize]
    [HttpPost("[action]")]
    [ProducesResponseType(StatusCodes.Status202Accepted)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    public async Task<IActionResult> Logout([FromBody] RefreshTokenModel refreshTokenCredentials)
    {
        return await LogoutUser(refreshTokenCredentials);
    }
}