using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Dtos.LoginReturnDto
{
    public class LoginReturnDto
    {
        public int Id { get; set; }
        public string Username  { get; set; }
        public string UserRoles { get; set; }
    }
}