using System.Text;
using IdentityServer.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IdentityServer.Extensions.EntityTypeConfigurations;

public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
{
    public void Configure(EntityTypeBuilder<IdentityRole> builder)
    {
        builder.HasData(
            new IdentityRole
            {
                Name = RolesEnum.Administrator,
                NormalizedName = RolesEnum.Administrator.ToUpper()
            },
            new IdentityRole
            {
                Name = RolesEnum.User,
                NormalizedName = RolesEnum.User.ToUpper()
            }
        );

    }
}