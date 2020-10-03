using MSMBackend.Models;
using System.Collections.Generic;

namespace MSMBackend.Data
{
    public class TestRepo : IPropertyRepo
    {
        public void CreateProperty(Property property)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteProperty(Property property)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Property> GetAllProperties()
        {
            var properties = new List<Property>
                {
                            new Property{Id=0, Name="Victorian Property", 
                            Location="Lake Charles", ImageURL="someurlhere"
                            , Utilities=true, Roof=3
                            , ExtWalls=5, ExtOpenings=6
                            , Framework=3, Piers=2
                            , Chimney=2, Door=1
                            , Windows=1, Shutters=2
                            ,Flooring=4, Electrical=2
                            ,Plumbing=2, Sewer=1
                            ,HVAC=5},
                          
                };
            return properties;
        }
            
        
        public Property GetPropertyById(int Id)
        {
            return new Property
            {
                Id = 0,
                Name = "Victorian Property",
                Location = "Lake Charles",
                ImageURL = "someurlhere",
                Utilities = true,
                Roof = 3,
                ExtWalls = 5,
                ExtOpenings = 6 ,
                Framework = 3,
                Piers = 2,
                Chimney = 2,
                Door = 1, 
                Windows = 1,
                Shutters = 2,
                Flooring = 4,
                Electrical = 2,
                Plumbing = 2,
                Sewer = 1,
                HVAC = 5
            };
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }

        public void UpdateProperty(Property property)
        {
            throw new System.NotImplementedException();
        }
    }

         
}

