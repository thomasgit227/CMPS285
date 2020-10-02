using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
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

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));
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


        
        //POST api/Properties
        [HttpPost]
        public ActionResult<PropertyReadDto> CreateProperty(PropertyCreateDto propertyCreateDto)
        {
            var propertyModel = _mapper.Map<Property>(propertyCreateDto); 
                                                                          
            _repository.CreateProperty(propertyModel);
            _repository.SaveChanges();

            var propertyReadDto = _mapper.Map<PropertyReadDto>(propertyModel);

            return CreatedAtRoute(nameof(GetPropertyById), new { Id = propertyReadDto.Id }, propertyReadDto);
        }

        //PUT api/commands/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateProperty(int id, PropertyUpdateDto propertyUpdateDto)
        {
            var propertyModelFromRepo = _repository.GetPropertyById(id);
            if(propertyModelFromRepo ==  null)
            {
                return NotFound(); //404
            }

            _mapper.Map(propertyUpdateDto, propertyModelFromRepo);

            //This isnt doing anything rn but if we update the repo implementation later its here
            _repository.UpdateProperty(propertyModelFromRepo);

            _repository.SaveChanges();

            return NoContent();
        }

        //PATCH api/commands{id}
        [HttpPatch("{id}")]
        public ActionResult PartialPropertyUpdate(int id, JsonPatchDocument<PropertyUpdateDto> patchDoc)
        {
            var propertyModelFromRepo = _repository.GetPropertyById(id);
            if(propertyModelFromRepo == null)
            {
                return NotFound();
            }

            var propertyToPatch = _mapper.Map<PropertyUpdateDto>(propertyModelFromRepo);
            patchDoc.ApplyTo(propertyToPatch, ModelState);

            if(!TryValidateModel(propertyToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(propertyToPatch, propertyModelFromRepo);

            _repository.UpdateProperty(propertyModelFromRepo);

            _repository.SaveChanges();

            return NoContent();
        }

        //DELETE api/properties/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteProperty(int id)
        {
            var propertyModelFromRepo = _repository.GetPropertyById(id);
            if (propertyModelFromRepo == null)
            {
                return NotFound();
            }

            _repository.DeleteProperty(propertyModelFromRepo);
            _repository.SaveChanges();

            return NoContent();
        }

    }
}
