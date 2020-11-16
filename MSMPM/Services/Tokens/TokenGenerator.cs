using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MSMBackend.Data.Entity;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MSMBackend.Data.Tokens
{
    public class TokenGenerator : ITokenGenerator
    {
		private readonly IConfiguration _config;

		public TokenGenerator(IConfiguration config)
		{
			_config = config;

		}
		public string GenerateToken(User user, IList<string> roles, IList<Claim> claims)
		{

			claims.Add(new Claim(JwtRegisteredClaimNames.GivenName, user.UserName));

			foreach (var role in roles)
			{
				claims.Add(new Claim(ClaimTypes.Role, role));
			}

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Token:Key"]));

			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(claims),
				Expires = DateTime.Now.AddDays(7),
				SigningCredentials = creds,
				Issuer = _config["Token:Issuer"],
			};

			var tokenHandler = new JwtSecurityTokenHandler();

			var token = tokenHandler.CreateToken(tokenDescriptor);

			return tokenHandler.WriteToken(token);
		}
	}
	
}
    
