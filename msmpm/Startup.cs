using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using MSMBackend.Models;
using MSMBackend.Data;
using AutoMapper;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using MSMBackend.Data.Entity;
using Microsoft.AspNetCore.Identity;
using MSMBackend.Data.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace MSMBackend
{
    public class Startup
    {
        //private readonly UserManager<User> userManager;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            //this.userManager = new UserManager<User>();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            
            services.AddDbContext<PropertyContext>(opt => opt.UseSqlServer
                (Configuration.GetConnectionString("MSMConnection")));

            services.AddIdentity<User, Role>()
                    .AddEntityFrameworkStores<PropertyContext>()
                    .AddDefaultTokenProviders();

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddScoped<IPropertyRepo, SqlPropertyRepo>();  //Created new implementation using sql server
                                                                   //Here is being injected
            services.AddScoped<ITokenGenerator, TokenGenerator>();

            services.AddAuthentication(cfg =>
            {
                cfg.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                cfg.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Token:Key"])),
                    ValidIssuer = Configuration["Token:Issuer"],
                    ValidateIssuer = false,
                    ValidateAudience = false,
                };
            });

            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "MSMPM/build";
            });


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "MSMPM API", Version = "V1" });
            });

            services.AddCors(x => x.AddPolicy("AllowAll", Builder => {
                Builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            } ));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
           MigrateDb(app);
           AddRoles(app).GetAwaiter().GetResult();
           AddUsers(app).GetAwaiter().GetResult();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
           
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "MSMPM API");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("AllowAll");

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpaStaticFiles();

            app.UseSpa(spa => {
                spa.Options.SourcePath = "MSMPM";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }


        private static async Task AddRoles(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var roleManager = serviceScope.ServiceProvider.GetService<RoleManager<Role>>();
                if (roleManager.Roles.Any())
                {
                    return;
                }

                await roleManager.CreateAsync(new Role { Name = Roles.Admin });
                await roleManager.CreateAsync(new Role { Name = Roles.Editor });
                await roleManager.CreateAsync(new Role { Name = Roles.Viewer });
            }
        }

        private static async Task AddUsers(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                if (userManager.Users.Any())
                {
                    return;
                }

                await CreateUser(userManager, "admin", Roles.Admin, "password");
                await CreateUser(userManager, "editor", Roles.Editor, "password");
                await CreateUser(userManager, "viewer", Roles.Viewer, "password");
            }
        }

        private static async Task CreateUser(UserManager<User> userManager, string username, string role, string password)
        {
            //const string passwordForEveryone = "Password123!";
            var user = new User { UserName = username };
            await userManager.CreateAsync(user, password);
            await userManager.AddToRoleAsync(user, role);
        }

        private static void MigrateDb(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<PropertyContext>();
                context.Database.Migrate();
            }
        }
    }
}
