using MSMBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace MSMBackend.Models
{
    public class PropertyContext : DbContext
    {
        public PropertyContext(DbContextOptions<PropertyContext> options)
            : base(options)
        {

        }

        public DbSet<Property> Properties { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Property>().HasData(
                    new Property
                    {
                        Id = 2,
                        Name = "TestProp",
                        Location = "TestLocation",
                        Username = "TestUsername",
                        ImageURL = "TestImage",
                        Utilities = false,
                        Roof = 7,
                        ExtWalls = 7,
                        ExtOpenings = 7,
                        Framework = 7,
                        Piers = 7,
                        Chimney = 7,
                        Door = 7,
                        Windows = 7,
                        Shutters = 7,
                        Flooring = 7,
                        Electrical = 7,
                        Plumbing = 7,
                        Sewer = 7,
                        HVAC = 7

                    }
                 );
        }
    }
}

