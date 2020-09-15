using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Models
{
    public class Property
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int RoofRating { get; set; }
        public int BuildingRating { get; set; }
    }
}
