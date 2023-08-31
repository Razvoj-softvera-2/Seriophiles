using Series.API.DTOs;


namespace Series.API.Repositories
{
    public interface ITVShowRepository
    {
        Task<TVShowDTO> GetTVShowById(int id);
        Task<IEnumerable<TVShowDTO>> GetAllTVShows();
        Task<IEnumerable<TVShowDTO>> GetTVShowByTitle(string name);
        Task<IEnumerable<TVShowDTO>> GetTVShowsByYear(int year);
        Task<IEnumerable<TVShowDTO>> GetTVShowsByRuntime(int runtime);
        Task<IEnumerable<TVShowDTO>> GetTVShowsByGenre(string genre);
        Task<IEnumerable<TVShowDTO>> GetTVShowsByLanguage(string language);
        Task<bool> DeleteTVShow(int id);
        Task<bool> CreateTVShowById(int id);
        Task<bool> CreateRandomTVShows(int number);

    }
}
