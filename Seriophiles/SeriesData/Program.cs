using Microsoft.EntityFrameworkCore;
using SeriesData.Data;
using SeriesData.Grpc;
using SeriesData.Services;

public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
                services.AddDbContext<SeriesDataDbContext>(options =>
                    options.UseSqlServer(hostContext.Configuration.GetConnectionString("DefaultConnection")));

                services.AddHttpClient<SeriesDataService>();

                services.AddSingleton<SeriesDataGrpc>();
                services.AddGrpc(options =>
                {
                    options.EnableDetailedErrors = true;
                });
            });
}