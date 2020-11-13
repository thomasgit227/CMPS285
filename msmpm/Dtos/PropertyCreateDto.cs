using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Dtos
{
    public class PropertyCreateDto
    {
        //We don't pass the Id in our create dto because our DB is creating that when the object is created public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        [Required]
        public string Location { get; set; }

        //[Required]
        //public string Username { get; set; }

        [Required]
        public string ImageURL { get; set; }
        [Required]
        public Boolean Utilities { get; set; }

        //public string MSMID { get; set; }

        [Required]
        public int Roof { get; set; }
        [Required]
        public int ExtWalls { get; set; }
        [Required]
        public int ExtOpenings { get; set; }
        [Required]
        public int Framework { get; set; }
        [Required]
        public int Piers { get; set; }
        [Required]
        public int Chimney { get; set; }
        [Required]
        public int Door { get; set; }
        [Required]
        public int Windows { get; set; }
        [Required]
        public int Shutters { get; set; }
        [Required]
        public int Flooring { get; set; }
        [Required]
        public int Electrical { get; set; }
        [Required]
        public int Plumbing { get; set; }
        [Required]
        public int Sewer { get; set; }
        [Required]
        public int HVAC { get; set; }
        public string UsersId { get; set; }
    }
}
