using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MSMBackend.Data.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace MSMBackend.Models
{
    public class PropertyContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public PropertyContext(DbContextOptions<PropertyContext> options)
            : base(options)
        {

        }

        public DbSet<Property> Properties { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Seed();
        }


    }
}

