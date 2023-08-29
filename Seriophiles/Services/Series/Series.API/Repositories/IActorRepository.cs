using Series.API.DTOs;

namespace Series.API.Repositories
{
    public interface IActorRepository
    {
        Task<ActorDTO> GetActorById(int id);
        Task<bool> CreateActorById(int id);
    }
}
