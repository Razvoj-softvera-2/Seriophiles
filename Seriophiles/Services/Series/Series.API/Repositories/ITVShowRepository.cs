using Series.API.DTOs;
using Series.API.Entities;


namespace Series.API.Repositories
{
    public interface ITVShowRepository
    {
        Task<TVShowDTO> GetTVShowById(string id);
        Task<IEnumerable<TVShowDTO>> GetAllTVShows();
        Task<IEnumerable<TVShowDTO>> GetTVShowByTitle(string name);
        Task<IEnumerable<TVShowDTO>> GetTVShowByYear(int year);
        Task<IEnumerable<TVShowDTO>> GetTVShowByLanguage(string language);
        Task<bool> DeleteTVShow(string id);
    }
}
