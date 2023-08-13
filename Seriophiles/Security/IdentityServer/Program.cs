using IdentityServer.Configurations;
using IdentityServer.Extensions;
using IdentityServer.Repositories.Roles;
using IdentityServer.Repositories.Users;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Authentication for the rest
// builder.Services.AddAuthentication();

//Testing locally
// builder.Configuration.AddJsonFile("appsettings.Development.json");


//Extensions
builder.Services.ConfigurePersistence(builder.Configuration);
builder.Services.ConfigureIdentity();

builder.Services.ConfigureJWT(builder.Configuration);
builder.Services.ConfigureInjections();
builder.Services.ConfigureAutoMapper();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseCors("CorsPolicy");
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();