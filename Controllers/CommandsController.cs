using System.Collections.Generic;
using FireFerrets.Data;
using FireFerrets.Models;
using Microsoft.AspNetCore.Mvc;

namespace Commander.Controllers
{
    //api commands
    [Route("api/commands")]
    [ApiController]
    public class CommandsController : ControllerBase
    {
        private readonly IFireFerretsRepo _repository;      //Instantiation? 

        public CommandsController(IFireFerretsRepo repository)  //dependency injection of mock repo
        {
            _repository = repository;
        }


        //private readonly MockFireFerretsRepo _repository = new MockFireFerretsRepo();
        //This will get GET api/commands
        [HttpGet]
        public ActionResult <IEnumerable<Command>> GetAllCommands() //hitting localhost:5001/api/commands with postman will hit and 
                                                                    // return this endpoint first action result which is going to return all 
                                                                    //commands in fireferrets repo in a JSON format to postman

        {
            var commandItems = _repository.GetAllCommands();    

            return Ok(commandItems);
        }

        //Gives us ROUTE to GET request that will respond to this api/commands/{5} URI
        [HttpGet("{id}")]
        public ActionResult <Command> GetCommandById(int id)  //This ID is actually coming from the URI which is friggin dope
        {
            var commandItem = _repository.GetCommandById(id);   //Variable to contain our single command item
            return Ok(commandItem);
        }

    }
}