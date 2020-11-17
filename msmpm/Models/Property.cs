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
        public int Paint { get; set; }

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

        [Required]
        public DateTimeOffset Created { get; set; }

        //public DateTimeOffset? LastUpdated {get; set;}
        
        //public DateTimeOffset? Deleted { get; set; }

        public string UsersId { get; set; }


        //Average method if we decide to implement it in the Property class and not calculate it through the Repo
        public int Average()
        {
            int[] attributes = { Roof , ExtWalls , ExtOpenings , Framework , Paint, Piers ,
            Chimney , Door , Windows , Shutters , Flooring, Electrical , Plumbing , Sewer , HVAC };

            int avg = 0;
            int div = 1;

            //We ignore values if they are equal to zero
            for(int i = 0; i < attributes.Length; i++)
            {
                int a = attributes[i];
                if (a != 0)
                {
                    if (avg > 0)
                    {
                        div++;
                    }
                    avg += a;
                }
            }

            if (avg == 0)
            {
                return 0;
            }
            return avg / div;
        }


        //I added compare methods just to make the sorting methods easier and cleaner
        public int CompareAverage(Property b)
        {
            return Average() - b.Average();
        }

        public int CompareTime(Property b)
        {
            return Created.CompareTo(b.Created);
        }
        
        private void SetTime()
        {
            Created = DateTimeOffset.Now;
        }

        public string GetTime()
        {
            string fmt = "G";
            return Created.ToString(fmt);
        }

        //We have a seperate method for Update for now in case we decide to return the Average in the DTO instead of an endpoint
        //If we return the Average in a DTO we need to update the Average in this method
        public void Update()
        {
            SetTime();
        }
        
    }
}
