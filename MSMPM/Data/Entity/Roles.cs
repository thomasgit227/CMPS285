using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MSMBackend.Data.Entity
{
    internal static class Roles
    {
        public const string Admin = nameof(Admin);
        public const string Editor = nameof(Editor);
        public const string Viewer = nameof(Viewer);

        private static bool HasAnyRole(ClaimsPrincipal user, string target)
        {
            foreach(var role in target.Split(","))
            {
                if (user.IsInRole(role))
                {
                    return true;
                }
            }
            return false;
        }
    }
}
