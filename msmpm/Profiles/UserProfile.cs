using AutoMapper;
using MSMBackend.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MSMBackend.Models;
using Microsoft.EntityFrameworkCore.Update.Internal;
using MSMBackend.Data.Entity;
using MSMBackend.Dtos.UserDto;

namespace MSMBackend.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {               //Source Object ---> Destination Object
            CreateMap<User, CreateUserDto>();

            CreateMap<User, LoginDto>();

            CreateMap<User, UserRoleDto>();

        }
    }
}
