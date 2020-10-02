using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace MSMBackend.Models
{
    public class Property
    {

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public DateTimeOffset EditTime { get; set; }

        [Required]
        public String UserName { get; set; }

        [Required]

        public string ImageURL { get; set; }

        [Required]
        public Boolean Utilities { get; set; }

        //public int SteveID { get; set; }

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

        
        //Average method if we decide to implement it in the Property class and not calculate it through the Repo
        public int Average()
        {
            int avg = Roof + ExtWalls + ExtOpenings + Framework + Piers;
            avg += Chimney + Door + Windows + Shutters + Flooring;

            if (Utilities)
            {
                avg += Electrical + Plumbing + Sewer + HVAC;

                avg = avg / 14;
            }
            else
            {
                avg = avg / 10;
            }

            return avg;
        }
        

    }
}
