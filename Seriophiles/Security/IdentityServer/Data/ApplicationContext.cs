using IdentityServer.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityServer.Data;

public class ApplicationContext : IdentityDbContext<User>
{
    public ApplicationContext(DbContextOptions options) : base(options)
    {
    }
    
    
}