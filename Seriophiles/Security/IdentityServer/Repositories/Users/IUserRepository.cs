using System.Threading.Tasks;
using IdentityServer.DTOs;
using IdentityServer.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Repositories.Users;

public interface IUserRepository
{
    Task<User?> FindByIdAsync(string userId);
    Task<User?> FindByEmailAsync(string email);
    Task<User?> FindByUsernameAsync(string username);
    Task<IdentityResult> CreateAsync(User user, string password);
    Task<IdentityResult> UpdateAsync(User user);
    Task<IdentityResult> DeleteAsync(User user);
    Task<IdentityResult> AddToRoleAsync(User user, string role);
    Task<IdentityResult> CreateAsync(User user);
    Task<bool> CheckPasswordAsync(User user, string password);
    Task<IList<string>> GetRolesAsync(User user);

    IQueryable<User> GetUsers();

}