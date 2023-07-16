using MongoDB.Driver;
using Series.API.Entities;

namespace Series.API.Context
{
    public class TVShowContext : ITVShowContext
    {
        public TVShowContext(IConfiguration configuration)
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var TVShowsDatabase = client.GetDatabase("TVShowsDB");
            TVShows = TVShowsDatabase.GetCollection<TVShow>("TVShows");
            Actors = TVShowsDatabase.GetCollection<Actor>("Actors");
        }
        
        public IMongoCollection<TVShow> TVShows { get; }
        public IMongoCollection<Actor> Actors { get; }
    }
}
