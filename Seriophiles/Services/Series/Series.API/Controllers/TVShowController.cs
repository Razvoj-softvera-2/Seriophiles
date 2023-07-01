using Microsoft.AspNetCore.Mvc;
using Series.API.DTOs;
using Series.API.Repositories;

namespace Series.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TVShowController : ControllerBase
    {
        private readonly ITVShowRepository _repository;

        public TVShowController(ITVShowRepository repository)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpGet("{id}", Name = "GetTVShow")]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<TVShowDTO>> GetTVShowById(int id)
        {
            var tvshow = await _repository.GetTVShowById(id);
            if (tvshow == null)
            {
                return NotFound();
            }
            return Ok(tvshow);
        }

        [HttpGet("[action]")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetAllTVShows()
        {
            var tvshows = await _repository.GetAllTVShows();
            return Ok(tvshows);
        }

        [HttpGet("[action]/{name}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowByTitle(string name)
        {
            var tvshow = await _repository.GetTVShowByTitle(name);
            return Ok(tvshow);
        }

        [HttpGet("[action]/{year}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowsByYear(int year)
        {
            var tvshows = await _repository.GetTVShowsByYear(year);
            return Ok(tvshows);
        }
        

        [HttpPost("[action]/{id}")]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(void), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<TVShowDTO>> CreateTVShowById(int id)
        {
            var result = await _repository.CreateTVShowById(id);

            if (result == false)
                return BadRequest();

            var show = await _repository.GetTVShowById(id);

            return show;
        }

        [HttpGet("[action]/{genre}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowsByGenre(string genre)
        {
            var shows = await _repository.GetTVShowsByGenre(genre);
            return Ok(shows);
        }

        [HttpGet("[action]/{language}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowsByLanguage(string language)
        {
            var shows = await _repository.GetTVShowsByLanguage(language);
            return Ok(shows);
        }


        [HttpDelete("[action]/{id}")]
        [ProducesResponseType(typeof(void), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteTVShow(int id)
        {
            await _repository.DeleteTVShow(id);
            return Ok();
        }

    }   
}
        