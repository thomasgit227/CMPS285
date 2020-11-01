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
    [Route("/")]
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

        // GET: https://msmbackenddeploy.azurewebsites.net/
        [HttpGet("", Name = "Get All Properties")]
        public ActionResult<IEnumerable<PropertyReadDto>> GetAllProperties()
        {
            var propertyItems = _repository.GetAllProperties();

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));
        }


        // GET: https://msmbackenddeploy.azurewebsites.net/{id}
        [HttpGet("{id}", Name = "Get Property By Id")]
        public ActionResult<PropertyReadDto> GetPropertyById(int id)
        {
            var propertyItem = _repository.GetPropertyById(id);
            if (propertyItem != null)
            {
                return Ok(_mapper.Map<PropertyReadDto>(propertyItem));
            }

            return NotFound();
        }

        /*
        // GET: https://msmbackenddeploy.azurewebsites.net/average
        [HttpGet("{id}/average", Name = "Get Average Of Property")]
        public ActionResult<int> GetAverageOfProperty(int id)
        {
            var propertyItem = _repository.GetPropertyById(id);

            if (propertyItem != null)
            {
                int average = _repository.AverageAttributeRating(propertyItem);
                return Ok(_mapper.Map<int>(average));
            }

            return NotFound();
        }

        
        // GET: https://msmbackenddeploy.azurewebsites.net/{id}/time
        [HttpGet("{id}/time", Name = "Get Edit Time Of Property")]
        public ActionResult<string> GetEditTimeOfProperty(int id)
        {
            var propertyItem = _repository.GetPropertyById(id);

            if (propertyItem != null)
            {
                string time = _repository.PropertyEditTime(propertyItem);
                return Ok(_mapper.Map<string>(time));
            }

            return NotFound();
        }
        */

        // Get: https://msmbackenddeploy.azurewebsites.net/best
        [HttpGet("best", Name = "Get Best Properties")]
        public ActionResult<IEnumerable<PropertyReadDto>> GetBestProperties()
        {
            var propertyItems = _repository.BestProperties();

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));
        }

        // Get: https://msmbackenddeploy.azurewebsites.net/recent
        [HttpGet("recent", Name = "Get Recent Properties")]
        public ActionResult<IEnumerable<PropertyReadDto>> GetRecentProperties()
        {
            var propertyItems = _repository.RecentProperties();

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));
        }


        //POST https://msmbackenddeploy.azurewebsites.net
        [HttpPost("", Name = "Create Property")]
        public ActionResult<PropertyReadDto> CreateProperty(PropertyCreateDto propertyCreateDto)
        {
            var propertyModel = _mapper.Map<Property>(propertyCreateDto);

            _repository.CreateProperty(propertyModel);

            //This updates the edit time to be the current time
            _repository.UpdateProperty(propertyModel);

            _repository.SaveChanges();

            var propertyReadDto = _mapper.Map<PropertyReadDto>(propertyModel);

            return CreatedAtRoute(nameof(GetPropertyById), new { Id = propertyReadDto.Id }, propertyReadDto);
        }

        //PUT https://msmbackenddeploy.azurewebsites.net/{id}
        [HttpPut("{id}", Name ="Update Property")]
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

            return NoContent();
        }

        /*
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
        */

        //DELETE https://msmbackenddeploy.azurewebsites.net/{id}
        [HttpDelete("{id}", Name ="Delete Property")]
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
        //Additional methods currently just for testing:

        // Get: https://msmbackenddeploy.azurewebsites.net/alphabetical
        [HttpGet("abc", Name = "Get Alphabetical List of Properties")]
        public ActionResult<IEnumerable<PropertyReadDto>> GetAlphabeticalProperties()
        {
            var propertyItems = _repository.SortByAlphabetical();

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));
        }
        
    }
}
