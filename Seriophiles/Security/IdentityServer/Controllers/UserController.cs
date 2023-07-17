using AutoMapper;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IdentityServer.Controllers;

//not finished
[Authorize]
[Route("api/v1/[controller]")]
[ApiController]
public class UserController : ControllerBase
{

    private readonly IUserRepository _userRepository;
    private readonly IRoleRepository _roleRepository;
    private readonly IMapper _mapper;


    public UserController(IUserRepository userRepository, IRoleRepository roleRepository, IMapper mapper)
    {
        _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
        _roleRepository = roleRepository ?? throw new ArgumentNullException(nameof(roleRepository));
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
    }
    
    [Authorize(Roles = RolesEnum.Administrator)]
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<UserDetailsDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<UserDetailsDto>>> GetAllUsers()
    {
        var users = await _userRepository.GetUsers().ToListAsync();
        return Ok(_mapper.Map<IEnumerable<UserDetailsDto>>(users));
    }
    
    [Authorize(Roles = RolesEnum.Administrator + "," +  RolesEnum.User)]
    [HttpGet("{username}")]
    [ProducesResponseType(typeof(UserDetailsDto), StatusCodes.Status200OK)]
    public async Task<ActionResult<UserDetailsDto>> GetUser(string username)
    {
        var user = await _userRepository.GetUsers().FirstOrDefaultAsync(user => user.UserName == username);
        return Ok(_mapper.Map<UserDetailsDto>(user));
    }
}