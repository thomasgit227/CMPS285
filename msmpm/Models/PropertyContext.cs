using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
