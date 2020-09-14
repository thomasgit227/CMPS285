using System.Collections.Generic;
using FireFerrets.Models;

namespace FireFerrets.Data
{



    public interface IFireFerretsRepo
    {
        IEnumerable<Command> GetAppCommands();
        Command GetCommandById(int id);
    }

}