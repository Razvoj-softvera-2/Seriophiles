using Series.API.DTOs;
using Series.API.Entities;
using AutoMapper;
using Series.API.Context;
using MongoDB.Driver;

namespace Series.API.Repositories
{
    public class TVShowRepository : ITVShowRepository
    {
        private readonly ITVShowContext _TVShowContext;
        private readonly IMapper _mapper;

        public TVShowRepository(ITVShowContext TVShowContext, IMapper mapper)
        {
            _TVShowContext = TVShowContext ?? throw new ArgumentNullException(nameof(TVShowContext));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<TVShowDTO> GetTVShowById(int id)
        {
            var TVShow = await _TVShowContext.TVShows.Find(TVShow => (TVShow.id == id)).FirstOrDefaultAsync();
            return _mapper.Map<TVShowDTO>(TVShow);
        }
        
        public async Task<IEnumerable<TVShowDTO>> GetAllTVShows()
        {
            var TVShows = await _TVShowContext.TVShows.Find(TVShow => true).ToListAsync();
            return _mapper.Map<IEnumerable<TVShowDTO>>(TVShows);
        }

        public async Task<IEnumerable<TVShowDTO>> GetTVShowByTitle(string name)
        {
            var TVShows = await _TVShowContext.TVShows.Find(TVShow => TVShow.name.ToLower().Contains(name.ToLower())).ToListAsync();
            return _mapper.Map<IEnumerable<TVShowDTO>>(TVShows);
        }

        public async Task<IEnumerable<TVShowDTO>> GetTVShowsByYear(int year)
        {
            var TVShows = await _TVShowContext.TVShows.Find(TVShow => (TVShow.year == year)).ToListAsync();
            return _mapper.Map<IEnumerable<TVShowDTO>>(TVShows);
        }

    }
}
