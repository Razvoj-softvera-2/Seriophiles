using AutoMapper;
using IdentityServer.Controllers.Base;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;

namespace IdentityServer.Controllers;

//will replace User and Administrator Controllers 
public class AuthenticationController : RegistrationControllerBase
{
    public AuthenticationController(ILogger<UserController> logger, IMapper mapper, IUserRepository userManager, IRoleRepository roleRepository) 
        : base(logger, mapper, userManager, roleRepository)
    {
    }
}