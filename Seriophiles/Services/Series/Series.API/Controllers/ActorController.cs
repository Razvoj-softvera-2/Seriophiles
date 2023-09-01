using Microsoft.AspNetCore.Mvc;
using Series.API.DTOs;
using Series.API.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Series.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ActorController : ControllerBase
    {
        private readonly IActorRepository _actorRepository;

        public ActorController(IActorRepository repository)
        {
            _actorRepository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [Authorize(Roles = "Administrator,User")]
        [HttpPost("[action]/{id}")]
        [ProducesResponseType(typeof(ActorDTO), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(void), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ActorDTO>> CreateActorById(int id)
        {
            var result = await _actorRepository.CreateActorById(id);

            if (result == false)
                return BadRequest();

            var actor = await _actorRepository.GetActorById(id);

            return actor;
        }

        [Authorize(Roles = "Administrator,User")]
        [HttpGet("{id}", Name = "GetActor")]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<TVShowDTO>> GetActorById(int id)
        {
            var actor = await _actorRepository.GetActorById(id);
            if (actor == null)
            {
                var result = await _actorRepository.CreateActorById(id);

            if (result == false)
                return BadRequest();

            var actor1 = await _actorRepository.GetActorById(id);
            return Ok(actor1);
            }
            return Ok(actor);
        }
    }
}
