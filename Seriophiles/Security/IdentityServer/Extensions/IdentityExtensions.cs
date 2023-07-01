using IdentityServer.Data;
using IdentityServer.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

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

    public static IServiceCollection ConfigureIdentity(this IServiceCollection services)
    {
        //Identity configurations
        services.AddIdentity<User, IdentityRole>(options =>
            {
                //Password Options
                options.Password.RequireDigit = true;
                options.Password.RequireUppercase = true;
                options.Password.RequiredLength = 8;

                //User Options
                options.User.RequireUniqueEmail = true;

                //Lockout Options
                options.Lockout.MaxFailedAccessAttempts = 10;

                //Signin Options
                options.SignIn.RequireConfirmedAccount = true;

            })
            .AddEntityFrameworkStores<ApplicationContext>()
            .AddDefaultTokenProviders();

        return services;
    }
}