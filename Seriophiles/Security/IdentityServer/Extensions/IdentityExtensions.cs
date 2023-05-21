using IdentityServer.Data;
using Microsoft.EntityFrameworkCore;

namespace IdentityServer.Extensions;

public static class IdentityExtensions
{
    public static IServiceCollection ConfigurePersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("IdentityConnectionString"));
        });

        return services;
    }
}