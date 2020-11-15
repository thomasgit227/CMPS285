using System.Collections.Generic;
using MSMBackend.Models;


namespace MSMBackend.Data
{
    public interface IPropertyRepo
        //This is the "Contract" between client and API
    {
        bool SaveChanges();

        IEnumerable<Property> GetAllProperties(); 

        Property GetPropertyById(int id);

        void CreateProperty(Property property);

        void UpdateProperty(Property property);

        void DeleteProperty(Property property);
    }
}
