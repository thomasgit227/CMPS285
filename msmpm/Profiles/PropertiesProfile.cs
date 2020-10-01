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
        {               //Source Object ---> Destination Object
            CreateMap<Property, PropertyReadDto>();
            //CreateDTO mapped to ---> Property Domain Object (Property)
            CreateMap<PropertyCreateDto, Property>();
            //need to create propertyCreateDto
            CreateMap<PropertyUpdateDto, Property>();
        }

    }
}
