using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS;
using MSMBackend.Data.Entity;
using MSMBackend.Dtos.LoginReturnDto;
using MSMBackend.Dtos.UserDto;
using MSMBackend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;


namespace MSMBackend.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private readonly PropertyContext propertyContext;
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        private readonly SignInManager<User> signInManager;

        public AuthorizationController(PropertyContext propertyContext, UserManager<User> userManager, RoleManager<Role> roleManager, SignInManager<User> signInManager)
        {
            this.propertyContext = propertyContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.signInManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult> LoginAsync(LoginDto dto)
        {
            var user = await userManager.FindByNameAsync(dto.Username);
            if (user == null)
            {
                return BadRequest();
            }

            var result = await signInManager.CheckPasswordSignInAsync(user, dto.Password, true);
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            await signInManager.SignInAsync(user, false, "Password");

            var roles = await userManager.GetRolesAsync(user);

            return Ok(new UserRoleDto
            {
                Id = user.Id,
                Username = user.UserName,
                UserRoles = roles
            });
        }
        [HttpPost("create")]
        [Authorize(Roles = Roles.Admin)]
        public async Task<ActionResult> Create(CreateUserDto dto)
        {
            

            var newUser = new User 
            {
                UserName = dto.Username
            };
            
            using(var transaction = await propertyContext.Database.BeginTransactionAsync())
            {
                var identityresults = await userManager.CreateAsync(newUser, dto.Password);

                if(!identityresults.Succeeded) return BadRequest();

                var roleResluts = await userManager.AddToRoleAsync(newUser, dto.Role);

                if(!roleResluts.Succeeded) return BadRequest();
                
                transaction.Commit();
            }

            return Created(string.Empty, new LoginReturnDto
            {
                Id = newUser.Id,
                Username = newUser.UserName,
                UserRoles = dto.Role
            });
        }

        [HttpPut("updatePassword")]
        public async Task<ActionResult> UpdatePassword(LoginDto dto, string NewPassword)
        {
            var user = await userManager.FindByNameAsync(dto.Username);
            if (user == null)
            {
                return BadRequest();
            }

            var token = await userManager.GeneratePasswordResetTokenAsync(user);

            var result = await userManager.ResetPasswordAsync(user, token, NewPassword);
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
