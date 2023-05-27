using AutoMapper;
using IdentityServer.DTOs;
using IdentityServer.Entity;

namespace IdentityServer.Configurations;

public static class AutoMapperConfiguration
{
    public static IMapper Initialize()
    {
        var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<User, NewUserDto>();
                cfg.CreateMap<NewUserDto, User>();
            });

        return config.CreateMapper();
    }
}