using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Dtos
{
    public class PropertyUpdateDto
    {

        [Required]
        public Boolean Utilities { get; set; }
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
