using AutoMapper;
using MSMBackend.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MSMBackend.Models;
using Microsoft.EntityFrameworkCore.Update.Internal;

namespace MSMBackend.Profiles
{
    public class PropertiesProfile : Profile
    {
        public PropertiesProfile()
        {               
            //Source Object ---> Destination Object

            CreateMap<Property, PropertyReadDto>();
            
            CreateMap<PropertyCreateDto, Property>();
            
            CreateMap<PropertyUpdateDto, Property>();

            CreateMap<Property, PropertyUpdateDto>();

        }

    }
}
