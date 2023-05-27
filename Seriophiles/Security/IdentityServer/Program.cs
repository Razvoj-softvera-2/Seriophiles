using IdentityServer.Configurations;
using IdentityServer.Extensions;
using IdentityServer.Repositories.Roles;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Authentication for the rest
builder.Services.AddAuthentication();

//configure Automapper
var mapper = AutoMapperConfiguration.Initialize();
builder.Services.AddSingleton(mapper);


//Configuring persistence
builder.Services.ConfigurePersistence(builder.Configuration);

//Configuring the identity
builder.Services.ConfigureIdentity();

//DEPENDENCY INJECTIONS
builder.Services.AddTransient<IRoleRepository, RoleManagerRepositoryImplementation>();






var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();