using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Dtos.UsersDto
{
    public class UserRolesDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public IList<string> UserRoles { get; set; }
    }
}
