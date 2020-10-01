using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MSMBackend.Data;
using MSMBackend.Dtos;
using MSMBackend.Models;

namespace MSMBackend.Controllers
{
    [Route("api/Properties")]
    [ApiController]
    public class PropertiesController : ControllerBase
    {

        private readonly IPropertyRepo _repository;
        private readonly IMapper _mapper;

        public PropertiesController(IPropertyRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        // GET: api/Properties
        [HttpGet]
        public ActionResult<IEnumerable<PropertyReadDto>> GetAllProperties()
        {
            var propertyItems = _repository.GetAllProperties();

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));        //200 HTTP Success
        }

        // GET: api/Properties/{id}
        [HttpGet("{id}", Name = "GetPropertyById")]
        public ActionResult<PropertyReadDto> GetPropertyById(int id)
        {
            var propertyItem = _repository.GetPropertyById(id);
            if (propertyItem != null)
            {
                return Ok(_mapper.Map<PropertyReadDto>(propertyItem));
            }

            return NotFound();
        }


        //Returning Back a PropertyReadDto called CreateProperty(weird ik but will make sense) which 
        //takes as an input a PropertyCreateDto
        //POST api/Properties
        [HttpPost]
        public ActionResult<PropertyReadDto> CreateProperty(PropertyCreateDto propertyCreateDto)
        //Returning a representation of the model we're returning 
        //Weird b/c we need a ReadDto to return but we're creating a type createDto
        {
            //we want to convert whatever we get in our API request body to a model so we can get it to the repo
            var propertyModel = _mapper.Map<Property>(propertyCreateDto); //this will throw bc we need to map
                                                                          //<Mapping to Property Object>(source is propertyCreateDto arg ) //currently our mapping is reading a property from our DB and passing it
            _repository.CreateProperty(propertyModel);//Back to client;
            _repository.SaveChanges();

            var propertyReadDto = _mapper.Map<PropertyReadDto>(propertyModel);


            //But we want a CreateDto so we make a map
            return CreatedAtRoute(nameof(GetPropertyById), new { Id = propertyReadDto.Id }, propertyReadDto);
        }

        //PUT api/commands/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateProperty(int id, PropertyUpdateDto propertyUpdateDto)
        {
            var propertyModelFromRepo = _repository.GetPropertyById(id);
            if(propertyModelFromRepo ==  null)
            {
                return NotFound();
            }

            _mapper.Map(propertyUpdateDto, propertyModelFromRepo);

            //This isnt doing anything rn but if we update the repo implementation later its here
            _repository.UpdateProperty(propertyModelFromRepo);

            _repository.SaveChanges();

            return NoContent();
        }

    }
}
