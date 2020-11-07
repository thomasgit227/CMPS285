using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Models
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Property>().HasData(
                    new Property
                    {
                        Id = 2,
                        Name = "TestProp2",
                        Location = "TestLocatio2n",
                        
                        ImageURL = "TestImage2",
                        Average = 0,
                        EditTime = DateTime.Now.ToString(),
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
                        HVAC = 7,
                        UsersId = "TestUsername2"
                    },
                    new Property
                    {
                        Id = 4,
                        Name = "TestProp4",
                        Location = "TestLocation4",
                        
                        ImageURL = "TestImage4",
                        Average = 0,
                        EditTime = DateTime.Now.ToString(),
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
                        HVAC = 7,
                        UsersId = "TestUsername4"
                    },
                    new Property
                    {
                        Id = 5,
                        Name = "TestProp5",
                        Location = "TestLocation5",
                        
                        ImageURL = "TestImage5",
                        Average = 0,
                        EditTime = DateTime.Now.ToString(),
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
                        HVAC = 7,
                        UsersId = "TestUsername5"
                    },
                    new Property
                    {
                        Id = 6,
                        Name = "TestProp6",
                        Location = "TestLocation6",
                        
                        ImageURL = "TestImage6",
                        Average = 0,
                        EditTime = DateTime.Now.ToString(),
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
                        HVAC = 7,
                        UsersId = "TestUsername6"
                    },
                    new Property
                    {
                        Id = 7,
                        Name = "TestProp7",
                        Location = "TestLocation7",
                        
                        ImageURL = "TestImage7",
                        Average = 0,
                        EditTime = DateTime.Now.ToString(),
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
                        HVAC = 7,
                        UsersId = "TestUsername7"
                    }


                 );
        }
    }
}
