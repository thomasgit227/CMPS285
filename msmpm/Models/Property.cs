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
        public string Username { get; set; }

        [Required]

        public string ImageURL { get; set; }

        [Required]
        public int Average { get; set; }

        [Required]
        public string EditTime { get; set; }

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

        public DateTimeOffset TimeOfEdit { get; set; }


        
        private void ComputeAverage()
        {
            int[] attributes = { Roof, ExtWalls, ExtOpenings, Framework, Piers, Chimney, Door, Windows, 
                Shutters, Flooring, Electrical, Plumbing, Sewer, HVAC };
            Average = 0;
            int div = 0;
            for(int i = 0; i < attributes.Length; i++)
            {
                int num = attributes[i];
                Average += num;
                if (num != 0)
                {
                    div++;
                }
            }
            Average /= div;
        }


        private void SetTime()
        {
            TimeOfEdit = DateTimeOffset.Now;

            //This is the DateTimeOffset format to get the date and time of the edit
            string fmt = "G";
            EditTime = TimeOfEdit.ToString(fmt);
        }

        public void Update()
        {
            SetTime();
            ComputeAverage();
        }

        public int CompareEditTime(Property b)
        {
            return DateTimeOffset.Compare(TimeOfEdit, b.TimeOfEdit);
        }

        public int CompareAverage(Property b)
        {
            return Average - b.Average;
        }
    }
}
