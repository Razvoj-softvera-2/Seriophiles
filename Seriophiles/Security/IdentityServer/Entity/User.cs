using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Entity;

public class User : IdentityUser
{
    public string FirstName { get; set; }

    public string LastName { get; set; }

}