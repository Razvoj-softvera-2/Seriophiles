using System.Threading.Tasks;
using IdentityServer.Entity;
using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Repositories.Users;

public interface IUserRepository
{
    Task<User?> FindByIdAsync(string userId);
    Task<User?> FindByEmailAsync(string email);
    Task<IdentityResult> FindByUsername(string username);
    Task<IdentityResult> CreateAsync(User user, string password);
    Task<IdentityResult> UpdateAsync(User user);
    Task<IdentityResult> DeleteAsync(User user);
    Task<IdentityResult> AddToRoleAsync(User user, string role);
    Task<IdentityResult> CreateAsync(User user);
}