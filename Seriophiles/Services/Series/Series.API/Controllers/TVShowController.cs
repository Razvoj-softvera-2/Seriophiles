using Microsoft.AspNetCore.Mvc;
using Series.API.DTOs;
using Series.API.Repositories;

namespace Series.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TVShowController : ControllerBase
    {
        private readonly ITVShowRepository _showRepository;

        public TVShowController(ITVShowRepository repository)
        {
            _showRepository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        [HttpGet("{id}", Name = "GetTVShow")]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<TVShowDTO>> GetTVShowById(int id)
        {
            var tvshow = await _showRepository.GetTVShowById(id);
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
            var tvshows = await _showRepository.GetAllTVShows();
            return Ok(tvshows);
        }

        [HttpGet("[action]/{name}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowByTitle(string name)
        {
            var tvshow = await _showRepository.GetTVShowByTitle(name);
            return Ok(tvshow);
        }

        [HttpGet("[action]/{year}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowsByYear(int year)
        {
            var tvshows = await _showRepository.GetTVShowsByYear(year);
            return Ok(tvshows);
        }
        

        [HttpPost("[action]")]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(void), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<TVShowDTO>> CreateRandomTVShows(int number)
        {
            var result = await _showRepository.CreateRandomTVShows(number);

            if (result == false)
                return BadRequest();
            return Ok(result);

        }

        [HttpPost("[action]/{id}")]
        [ProducesResponseType(typeof(TVShowDTO), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(void), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<TVShowDTO>> CreateTVShowById(int id)
        {
            var result = await _showRepository.CreateTVShowById(id);

            if (result == false)
                return BadRequest();

            var show = await _showRepository.GetTVShowById(id);

            return show;
        }

        [HttpGet("[action]/{genre}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowsByGenre(string genre)
        {
            var shows = await _showRepository.GetTVShowsByGenre(genre);
            return Ok(shows);
        }

        [HttpGet("[action]/{language}")]
        [ProducesResponseType(typeof(IEnumerable<TVShowDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TVShowDTO>>> GetTVShowsByLanguage(string language)
        {
            var shows = await _showRepository.GetTVShowsByLanguage(language);
            return Ok(shows);
        }


        [HttpDelete("[action]/{id}")]
        [ProducesResponseType(typeof(void), StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteTVShow(int id)
        {
            await _showRepository.DeleteTVShow(id);
            return Ok();
        }

    }   
}
        