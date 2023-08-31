using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Entity;

public class Role : IdentityRole
{
    public string Description { get; set; }
}

