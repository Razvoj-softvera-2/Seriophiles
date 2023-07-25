using MongoDB.Driver;
using Series.API.Entities;

namespace Series.API.Context
{
    public class ActorContext : IActorContext
    {
        public ActorContext(IConfiguration configuration)
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var TVShowsDatabase = client.GetDatabase("TVShowsDB");
            Actors = TVShowsDatabase.GetCollection<Actor>("Actors");
        }

        public IMongoCollection<Actor> Actors { get; }
    }
}
