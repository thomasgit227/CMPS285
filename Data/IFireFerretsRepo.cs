using System.Collections.Generic;
using FireFerrets.Models;

namespace FireFerrets.Data
{



    public interface IFireFerretsRepo
    {

        bool SaveChanges();
        
        IEnumerable<Command> GetAllCommands();
        Command GetCommandById(int id);
        void CreateCommand(Command cmd);
    }

}