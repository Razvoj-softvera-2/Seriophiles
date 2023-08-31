using MongoDB.Driver;
using Series.API.Entities;

namespace Series.API.Context
{
    public class TVShowContext : ITVShowContext
    {
        public TVShowContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionString"));
            var TVShowsDatabase = client.GetDatabase("TVShowsDB");
            TVShows = TVShowsDatabase.GetCollection<TVShow>("TVShows");
        }
        
        public IMongoCollection<TVShow> TVShows { get; }
    }
}
