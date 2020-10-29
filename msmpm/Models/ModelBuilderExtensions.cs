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
                        Username = "TestUsername2",
                        ImageURL = "TestImage2",
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
                        EditTime = DateTime.Now
                    },
                    new Property
                    {
                        Id = 4,
                        Name = "TestProp4",
                        Location = "TestLocation4",
                        Username = "TestUsername4",
                        ImageURL = "TestImage4",
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
                        EditTime = DateTime.Now
                    },
                    new Property
                    {
                        Id = 5,
                        Name = "TestProp5",
                        Location = "TestLocation5",
                        Username = "TestUsername5",
                        ImageURL = "TestImage5",
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
                        EditTime = DateTime.Now
                    },
                    new Property
                    {
                        Id = 6,
                        Name = "TestProp6",
                        Location = "TestLocation6",
                        Username = "TestUsername6",
                        ImageURL = "TestImage6",
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
                        EditTime = DateTime.Now
                    },
                    new Property
                    {
                        Id = 7,
                        Name = "TestProp7",
                        Location = "TestLocation7",
                        Username = "TestUsername7",
                        ImageURL = "TestImage7",
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
                        EditTime = DateTime.Now
                    }


                 );
        }
    }
}
