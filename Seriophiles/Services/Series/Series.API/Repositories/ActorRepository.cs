using Series.API.DTOs;
using Series.API.Entities;
using AutoMapper;
using Series.API.Context;
using MongoDB.Driver;
using Series.API.TVMaze;

namespace Series.API.Repositories
{
    public class ActorRepository : IActorRepository
    {
        private readonly IActorContext _ActorContext;
        private readonly IMapper _mapper;

        public ActorRepository(IActorContext ActorContext, IMapper mapper)
        {
            _ActorContext = ActorContext ?? throw new ArgumentNullException(nameof(ActorContext));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }
        public async Task<bool> CreateActorById(int id)
        {
            var actor = await _ActorContext.Actors.Find(actor => (actor.id == id)).FirstOrDefaultAsync();
            var result = await TVMazeClient.FetchActorJson(id);
            if (actor != null || result == null)
                return false;
            await _ActorContext.Actors.InsertOneAsync(result);

            return true;
        }

        public async Task<ActorDTO> GetActorById(int id)
        {
            var Actor = await _ActorContext.Actors.Find(Actor => (Actor.id == id)).FirstOrDefaultAsync();
            return _mapper.Map<ActorDTO>(Actor);
        }
    }
}
