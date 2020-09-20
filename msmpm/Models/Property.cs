using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string ImageURL { get; set; }
        public Boolean Utilities { get; set; }
        //public int SteveID { get; set; }
        public int Roof { get; set; }
        public int ExtWalls { get; set; }
        public int ExtOpenings { get; set; }
        public int Framework { get; set; }
        public int Piers { get; set; }
        public int Chimney { get; set; }
        public int Door { get; set; }
        public int Windows { get; set; }
        public int Shutters { get; set; }
        public int Flooring { get; set; }
        public int Electrical { get; set; }
        public int Plumbing { get; set; }
        public int Sewer { get; set; }
        public int HVAC { get; set; }
    }
}
