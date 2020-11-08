using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS;
using MSMBackend.Data.Entity;
using MSMBackend.Dtos.UserDto;
using MSMBackend.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Controllers
{
    [Route("/api/auth")]
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
        public async Task<ActionResult> Create(CreateUserDto dto)
        {
            var user = new User { UserName = dto.Username };
            await userManager.CreateAsync(user, dto.Password);
            await userManager.AddToRoleAsync(user, dto.Role);
            return Ok();
        }
    
}
