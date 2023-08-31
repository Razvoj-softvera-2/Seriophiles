using Microsoft.EntityFrameworkCore;
using SeriesData.Models;

namespace SeriesData.Data;

public class SeriesDataDbContext : DbContext
{
    public DbSet<Show> Shows { get; set; }

    public SeriesDataDbContext(DbContextOptions<SeriesDataDbContext> options)
        : base(options)
    {
    }    
}