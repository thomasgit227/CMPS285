using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Models
{
    public class Register
    {
        public int Id { get; set; }
        
        public String Email { get; set }

        public String Password { get; set }

        public String EmployeeName { get; set }

        public String City { get; set }

        public String Department { get; set }
    }
}
