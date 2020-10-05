using AutoMapper;
using MSMBackend.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MSMBackend.Models;

namespace MSMBackend.Profiles
{
    public class PropertiesProfile : Profile
    {
        public PropertiesProfile()
        {
            CreateMap<Property, PropertyReadDto>();
            //need to create propertyCreateDto
            CreateMap<PropertyCreateDto, Property>();
        }

    }
}
