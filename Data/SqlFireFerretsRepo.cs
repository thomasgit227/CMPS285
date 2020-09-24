using System.Collections.Generic;
using System.Linq;
using FireFerrets.Data;
using FireFerrets.Models;

namespace Commander.Data
{
    public class SqlFireFerretsRepo : IFireFerretsRepo
    {
        private readonly FireFerretsContext _context;

        public SqlFireFerretsRepo(FireFerretsContext context)
        {
            _context = context;                         //we now have instance via dependency injection of our context class called context
        }

        public IEnumerable<Command> GetAllCommands()
        {
            return _context.Commands.ToList();      //Just return all our commands from context dbSet to a list
                                                    //Get all commands now implemented
        }

        public Command GetCommandById(int id)
        {
            return _context.Commands.FirstOrDefault(p => p.Id == id);
        }
    }
}