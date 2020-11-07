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

        

        IEnumerable<Property> BestProperties(int max = 10);

        IEnumerable<Property> RecentProperties(int max = 5);

        //Additional methods we may eventually need
        public IEnumerable<Property> SortByAlphabetical();

        //int AverageAttributeRating(Property property);

        //string PropertyEditTime(Property property);
    }
}
