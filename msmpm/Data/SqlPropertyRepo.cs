using MSMBackend.Models;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
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
            if(property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }

            _context.Properties.Add(property);

        }

        public IEnumerable<Property> GetAllProperties()
        {
            return _context.Properties.ToList();
        }

        public Property GetPropertyById(int id)
        {
            return _context.Properties.FirstOrDefault(p => p.Id == id);

            // p = that property id its calling from DB Table.
            // => is checking if THAT p's Id is equal to the ID being
            //passed into the arguement
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
