using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Repositories.Roles;

public interface IRoleRepository
{
    Task<IdentityResult> CreateAsync(IdentityRole role);
    Task<IdentityResult> UpdateAsync(IdentityRole role);
    Task<IdentityResult> DeleteAsync(IdentityRole role);
    Task<IdentityRole> FindByIdAsync(string roleId);
    Task<IdentityRole> FindByNameAsync(string roleName);
    Task<bool> RoleExistsAsync(string roleName);

}