﻿using Series.API.DTOs;
using Series.API.Entities;
using AutoMapper;
using Series.API.Context;
using MongoDB.Driver;
using Series.API.TVMaze;

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

        public async Task<IEnumerable<TVShowDTO>> GetTVShowsByRuntime(int runtime)
        {
            var TVShows = await _TVShowContext.TVShows.Find(TVShow => (TVShow.runtime == runtime)).ToListAsync();
            return _mapper.Map<IEnumerable<TVShowDTO>>(TVShows);
        }

        public async Task<IEnumerable<TVShowDTO>> GetTVShowsByGenre(string genre)
        {
            var TVShows = await _TVShowContext.TVShows.Find(TVShow => true).ToListAsync();
            var shows = new HashSet<TVShow>();
            shows.UnionWith(TVShows.FindAll(TVShow => TVShow.genres.Contains(genre)));

            return _mapper.Map<IEnumerable<TVShowDTO>>(shows);
        }

        public async Task<IEnumerable<TVShowDTO>> GetTVShowsByLanguage(string language)
        {
            var TVShows = await _TVShowContext.TVShows.Find(TVShow => (TVShow.language == language)).ToListAsync();
            return _mapper.Map<IEnumerable<TVShowDTO>>(TVShows);
        }


        public async Task<bool> DeleteTVShow(int id)
        {
            var deleteResult = await _TVShowContext.TVShows.DeleteOneAsync(TVShow => (TVShow.id == id));
            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }


        public async Task<bool> CreateTVShowById(int id)
        {
            var tvshow = await _TVShowContext.TVShows.Find(show => (show.id == id)).FirstOrDefaultAsync();
            var result = await TVMazeClient.FetchTVShowJson(id);

            if (tvshow != null || result == null)
                return false;

            await _TVShowContext.TVShows.InsertOneAsync(result.ToObject<TVShow>());

            return true;
        }

        public async Task<bool> CreateRandomTVShows(int number)
        {
            Random random = new Random();
            List<int> values = new List<int>();
            for (int i = 0; i < number; ++i)
            {
                var rand_num = random.Next(0,50000);
                if (values.Contains(rand_num))
                {
                    if (i > 0)
                        i = i - 1;
                    continue;
                }
                values.Add(rand_num);
            }


            for (int i = 0; i < number; i++)
            {
                var tvshow = await _TVShowContext.TVShows.Find(show => (show.id == values[i])).FirstOrDefaultAsync();
                if (tvshow != null)
                {
                    continue;
                }
                var result = await TVMazeClient.FetchTVShowJson(values[i]);

                if (tvshow != null || result == null)
                    return false;

                await _TVShowContext.TVShows.InsertOneAsync(result.ToObject<TVShow>());
            }


            return true;
        }

    }
}