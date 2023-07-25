using Series.API.Repositories;
using Microsoft.OpenApi.Models;
using Series.API.Context;
using Series.API.Entities;
using Series.API.DTOs;

namespace Series.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //CORS policy
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder =>
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            services.AddScoped<ITVShowContext, TVShowContext>();
            services.AddScoped<IActorContext, ActorContext>();
            services.AddScoped<ITVShowRepository, TVShowRepository>();
            services.AddScoped<IActorRepository, ActorRepository>();

            services.AddAutoMapper(configuration =>
            {
                configuration.CreateMap<TVShow, TVShowDTO>().ReverseMap();
                configuration.CreateMap<Actor, ActorDTO>().ReverseMap();
            });

            

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Series.API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Series.API v1"));
            }

            app.UseCors("CorsPolicy");
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
