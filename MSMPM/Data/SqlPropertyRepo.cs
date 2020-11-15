using Microsoft.AspNetCore.Authentication;
using MSMBackend.Models;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace MSMBackend.Data
{
    public class SqlPropertyRepo : IPropertyRepo
    {
        private readonly PropertyContext _context;

        public SqlPropertyRepo(PropertyContext context)
        {
            _context = context;
        }
        

        public void CreateProperty(Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            _context.Properties.Add(property);
        }

        public void DeleteProperty(Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            _context.Properties.Remove(property);
        }

        public IEnumerable<Property> GetAllProperties()
        {
            return _context.Set<Property>().ToList();
        }

        public Property GetPropertyById(int id)
        {
            return _context.Properties.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateProperty(Property property)
        {
            //Nothing DB Context does this for us
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            property.Update();
        }
    }
}
