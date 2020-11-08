using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MSMBackend.Data;
using MSMBackend.Data.Entity;
using MSMBackend.Dtos;
using MSMBackend.Dtos.UserDto;
using MSMBackend.Models;

namespace MSMBackend.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthorizeController : ControllerBase
    {
        private readonly PropertyContext dataContext;
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        private readonly SignInManager<User> signInManager;

        /*
        Note: Notice how I do not use the dataContext for endpoints that utilize only Identity.
        This is because while Identity is hooked up to the data context, and does have it's own entities,
        it has its own manager classes to deal with it's data. This is because these classes manage a lot of intracies like
        role level management, password updates, 2 factor authentication, and more!

        Frequently used Manager classes-
        
        UserManager<User>
        RoleManager<Role>
        SignInManager<User>
         */

        public AuthorizeController(PropertyContext dataContext, UserManager<User> userManager, RoleManager<Role> roleManager, SignInManager<User> signInManager)
        {
            this.dataContext = dataContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.signInManager = signInManager;
        }

        [HttpPost("login")]
        [Authorize(Roles = Roles.Viewer)]
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
            }); ;
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
}
