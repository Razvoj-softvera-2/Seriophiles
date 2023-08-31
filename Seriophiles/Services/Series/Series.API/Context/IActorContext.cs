using MongoDB.Driver;
using Series.API.Entities;

namespace Series.API.Context
{
    public interface IActorContext
    {
        IMongoCollection<Actor> Actors { get; }
    }
}
