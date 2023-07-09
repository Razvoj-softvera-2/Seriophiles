using IdentityServer.DTOs;
using IdentityServer.Entity;

namespace IdentityServer.Services;

public interface IAuthenticationService
{
    Task<User?> ValidateUser(UserCredentialsDto userCredentials);
    Task<AuthenticationModel> CreateAuthenticationModel(User user);
}