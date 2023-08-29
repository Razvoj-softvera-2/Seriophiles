using MongoDB.Driver;
using Series.API.Entities;

namespace Series.API.Context
{
    public interface ITVShowContext
    {
        IMongoCollection<TVShow> TVShows { get; }
    }
}