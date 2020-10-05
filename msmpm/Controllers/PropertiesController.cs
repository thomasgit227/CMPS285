using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
<<<<<<< Updated upstream
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
=======
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MSMBackend.Data;
using MSMBackend.Dtos;
>>>>>>> Stashed changes
using MSMBackend.Models;

namespace MSMBackend.Controllers
{
    [Route("api/Properties")]
    [ApiController]
    public class PropertiesController : ControllerBase
    {
<<<<<<< Updated upstream
        private readonly PropertyContext _context;

        public PropertiesController(PropertyContext context)
        {
            _context = context;
        }

        // GET: api/Properties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Property>>> GetProperty()
        {
            return await _context.Properties.ToListAsync();
        }

        // GET: api/Properties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Property>> GetProperty(int id)
        {
            var @property = await _context.Properties.FindAsync(id);

            if (@property == null)
            {
                return NotFound();
            }

            return @property;
        }

        // PUT: api/Properties/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProperty(int id, Property @property)
        {
            if (id != @property.Id)
            {
                return BadRequest();
            }

            _context.Entry(@property).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Properties
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Property>> PostProperty(Property @property)
        {
            _context.Properties.Add(@property);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProperty", new { id = @property.Id }, @property);
        }

        // DELETE: api/Properties/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Property>> DeleteProperty(int id)
        {
            var @property = await _context.Properties.FindAsync(id);
            if (@property == null)
            {
                return NotFound();
            }

            _context.Properties.Remove(@property);
            await _context.SaveChangesAsync();

            return @property;
        }

        private bool PropertyExists(int id)
        {
            return _context.Properties.Any(e => e.Id == id);
        }
=======

        private readonly IPropertyRepo _repository;
        private readonly IMapper _mapper;

        public PropertiesController(IPropertyRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }


      //  private readonly PropertyContext _context;
        

      //  public PropertiesController(PropertyContext context)
     ///   {
      //      _context = context;
      //  }

       // private readonly TestRepo _repository = new TestRepo();

        // GET: api/Properties
        [HttpGet]
        public ActionResult <IEnumerable<PropertyReadDto>> GetAllProperties()
        {
            var propertyItems = _repository.GetAllProperties();

            return Ok(_mapper.Map<IEnumerable<PropertyReadDto>>(propertyItems));        //200 HTTP Success
        }

        // GET: api/Properties/{id}
        [HttpGet("{id}")]
        public ActionResult <PropertyReadDto> GetPropertyById(int id)
        {
            var propertyItem = _repository.GetPropertyById(id);
            if(propertyItem != null)
            {
                return Ok(_mapper.Map<PropertyReadDto>(propertyItem));
            } 
            
            return NotFound();
        }

        [HttpPost]
        public ActionResult <PropertyReadDto> CreateProperty(PropertyCreateDto propertyCreateDto)
        {
            var propertyModel = _mapper.Map<Property>(propertyCreateDto);

            _repository.CreateProperty(propertyModel);
            _repository.SaveChanges();

            return Ok(propertyModel);
        }



        //  // GET: api/Properties
        ////*  [HttpGet]
        //  public async Task<ActionResult<IEnumerable<Property>>> GetProperty()
        //  {
        //      return await _context.Properties.ToListAsync();
        //  }

        //  // GET: api/Properties/5
        //  [HttpGet("{id}")]
        //  public async Task<ActionResult<Property>> GetProperty(int id)
        //  {
        //      var @property = await _context.Properties.FindAsync(id);

        //      if (@property == null)
        //      {
        //          return NotFound();
        //      }

        //      return @property;
        //  }

        //  // PUT: api/Properties/5
        //  // To protect from overposting attacks, enable the specific properties you want to bind to, for
        //  // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //  [HttpPut("{id}")]
        //  public async Task<IActionResult> PutProperty(int id, Property @property)
        //  {
        //      if (id != @property.Id)
        //      {
        //          return BadRequest();
        //      }

        //      _context.Entry(@property).State = EntityState.Modified;

        //      try
        //      {
        //          await _context.SaveChangesAsync();
        //      }
        //      catch (DbUpdateConcurrencyException)
        //      {
        //          if (!PropertyExists(id))
        //          {
        //              return NotFound();
        //          }
        //          else
        //          {
        //              throw;
        //          }
        //      }

        //      return NoContent();
        //  }

        //  // POST: api/Properties
        //  // To protect from overposting attacks, enable the specific properties you want to bind to, for
        //  // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //  [HttpPost]
        //  public async Task<ActionResult<Property>> PostProperty(Property @property)
        //  {
        //      _context.Properties.Add(@property);
        //      await _context.SaveChangesAsync();

        //      return CreatedAtAction("GetProperty", new { id = @property.Id }, @property);
        //  }

        //  // DELETE: api/Properties/5
        //  [HttpDelete("{id}")]
        //  public async Task<ActionResult<Property>> DeleteProperty(int id)
        //  {
        //      var @property = await _context.Properties.FindAsync(id);
        //      if (@property == null)
        //      {
        //          return NotFound();
        //      }

        //      _context.Properties.Remove(@property);
        //      await _context.SaveChangesAsync();

        //      return @property;
        //  }

        //  private bool PropertyExists(int id)
        //  {
        //      return _context.Properties.Any(e => e.Id == id);
        //  }       *//
>>>>>>> Stashed changes
    }
}
