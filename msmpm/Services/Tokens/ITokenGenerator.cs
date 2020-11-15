using MSMBackend.Data.Entity;
using System.Collections.Generic;
using System.Security.Claims;

namespace MSMBackend.Data.Tokens
{
    public interface ITokenGenerator
    { 
		string GenerateToken(User user, IList<string> roles, IList<Claim> claims);
	}
}
