using System.Collections.Generic;
using FireFerrets.Models;

namespace FireFerrets.Data
{



    public interface IFireFerretsRepo
    {
        IEnumerable<Command> GetAllCommands();
        Command GetCommandById(int id);
    }

}