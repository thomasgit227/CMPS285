using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MSMBackend.Data.Entity;
using MSMBackend.Dtos;
using MSMBackend.Dtos.UsersDto;

namespace MSMBackend.Profiles
{
    public class UserProfiles : Profile
    {
        public UserProfiles()
        {
            CreateMap<User, UserRolesDto>();

            CreateMap<User, LoginDto>();

            CreateMap<User, CreateUserDto>();
        }
    }
}
