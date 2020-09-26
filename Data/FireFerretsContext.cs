using FireFerrets.Models;
using Microsoft.EntityFrameworkCore;

namespace FireFerrets.Data
{
    public class FireFerretsContext : DbContext
    {
        public FireFerretsContext(DbContextOptions<FireFerretsContext> opt) : base(opt)
        {

        }

        public DbSet<Command> Commands { get; set; }  //Saying we want to represent our "Command" objects down to our Database
                                                        //as a DBset called "Command(s)"

    }
}