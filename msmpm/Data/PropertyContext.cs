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
        
    }
}
