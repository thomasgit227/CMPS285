using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
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
        private readonly IPropertySortRepo _sorter;
        private readonly IMapper _mapper;

        public PropertiesController(IPropertyRepo repository,  IMapper mapper)
        {
            _repository = repository;
            _sorter = new PropertySortRepo();
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


        // GET: api/Properties/{id}/average
        [HttpGet("{id}/average", Name = "GetAverageOfProperty")]
        public ActionResult<int> GetAverageOfProperty(int id)
        {
            var propertyItem = _repository.GetPropertyById(id);
            if (propertyItem != null)
            {
                int average = propertyItem.Average();

                return Ok(_mapper.Map<int>(average));
            }

            return NotFound();
        }

        // GET: api/Properties/{id}/time
        [HttpGet("{id}/time", Name = "GetEditTimeOfProperty")]
        public ActionResult<string> GetEditTimeOfProperty(int id)
        {
            var propertyItem = _repository.GetPropertyById(id);
            if (propertyItem != null)
            {
                string time = propertyItem.GetTime();
                return Ok(_mapper.Map<string>(time));
            }

            return NotFound();
        }

        // Get: api/Properties/best
        [HttpGet("best", Name = "GetBestProperties")]
        public ActionResult<IEnumerable<PropertyReadDto>> GetBestProperties()
        {
            var propertyItems = _repository.GetAllProperties();

            var sortedProperties = _sorter.SortByAverage(propertyItems);

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(sortedProperties));
        }

        // Get: api/Properties/recent
        [HttpGet("recent", Name = "GetRecentProperties")]
        public ActionResult<IEnumerable<PropertyReadDto>> GetRecentProperties()
        {
            var propertyItems = _repository.GetAllProperties();

            var sortedProperties = _sorter.SortByTime(propertyItems);

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(sortedProperties));
        }


        

        //POST api/Properties
        [EnableCors("AllowAll")]
        [HttpPost]
        public ActionResult<PropertyReadDto> CreateProperty(PropertyCreateDto propertyCreateDto)
        {
            var propertyModel = _mapper.Map<Property>(propertyCreateDto);

            _repository.CreateProperty(propertyModel);

            _repository.SaveChanges();

            propertyModel.Update();

            _repository.SaveChanges();

            var propertyReadDto = _mapper.Map<PropertyReadDto>(propertyModel);

            return CreatedAtRoute(nameof(GetPropertyById), new { Id = propertyReadDto.Id }, propertyReadDto);
        }

        //PUT api/commands/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateProperty(int id, PropertyUpdateDto propertyUpdateDto)
        {
            var propertyModelFromRepo = _repository.GetPropertyById(id);
            if (propertyModelFromRepo == null)
            {
                return NotFound(); //404
            }


            _mapper.Map(propertyUpdateDto, propertyModelFromRepo);

            //This updates the edit time to be the current time
            _repository.UpdateProperty(propertyModelFromRepo);

            _repository.SaveChanges();

            return Ok(propertyModelFromRepo);
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

            //This updates the edit time to be the current time
            _repository.UpdateProperty(propertyModelFromRepo);

            _repository.SaveChanges();

            return NoContent();
        }

        //DELETE api/Properties/{id}
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

            return Ok(_mapper.Map<PropertyReadDto>(propertyModelFromRepo));
        }

        // Get: api/Properties/alphabetical
        [HttpGet("alphabetical", Name = "GetAlphabeticalProperties")]
        public ActionResult<IEnumerable<PropertyReadDto>> GetAlphabeticalProperties()
        {
            var propertyItems = _repository.GetAllProperties();

            var sorted = _sorter.SortByAlphabetical(propertyItems);

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(sorted));
        }
    }
}
