using System.Text;
using IdentityServer.Configurations;
using IdentityServer.Data;
using IdentityServer.Entity;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;
using IdentityServer.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Tokens;

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

    public static IServiceCollection ConfigureJWT(this IServiceCollection services, IConfiguration configuration)
    {
        var jwtSettings = configuration.GetSection("JwtSettings");
        
        //some other way of getting the secret key
        var secretKey = jwtSettings.GetSection("secretKey").Value;

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    
                    ValidIssuer = jwtSettings.GetSection("validIssuer").Value,
                    ValidAudience = jwtSettings.GetSection("validAudience").Value,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))
                };
            });
        
        return services;
    }
    
    public static IServiceCollection ConfigureInjections(this IServiceCollection services)
    {
        services.AddTransient<IRoleRepository, RoleManagerRepositoryImplementation>();
        services.AddTransient<IUserRepository, UserManagerRepositoryImplementation>();
        services.AddScoped<IAuthenticationService, AuthenticationService>();


        return services;
    }

    public static IServiceCollection ConfigureAutoMapper(this IServiceCollection services)
    {
        var mapper = AutoMapperConfiguration.Initialize();
        services.AddSingleton(mapper);
        
        return services;
    }
    
    
}