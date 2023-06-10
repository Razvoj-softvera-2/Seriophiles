using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Repositories.Roles;

public class RoleManagerRepositoryImplementation : IRoleRepository
{
    private readonly RoleManager<IdentityRole> _roleManager;

    public RoleManagerRepositoryImplementation(RoleManager<IdentityRole> roleManager)
    {
        _roleManager = roleManager ?? throw new ArgumentNullException(nameof(roleManager));
    }


    public async Task<IdentityResult> CreateAsync(IdentityRole role)
    {
        return await _roleManager.CreateAsync(role);
    }

    public async Task<IdentityResult> UpdateAsync(IdentityRole role)
    {
        return await _roleManager.UpdateAsync(role);
    }

    public async Task<IdentityResult> DeleteAsync(IdentityRole role)
    {
        return await _roleManager.DeleteAsync(role);
    }

    public async Task<IdentityRole> FindByIdAsync(string roleId)
    {
        return await _roleManager.FindByIdAsync(roleId);
    }

    public async Task<IdentityRole> FindByNameAsync(string roleName)
    {
        return await _roleManager.FindByNameAsync(roleName);
    }

    public async Task<bool> RoleExistsAsync(string roleName)
    {
        return await _roleManager.RoleExistsAsync(roleName);
    }
}