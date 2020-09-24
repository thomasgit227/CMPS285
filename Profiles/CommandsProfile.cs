using AutoMapper;
using FireFerrets.Dtos;
using FireFerrets.Models;

namespace FireFerrets.Profiles
{
    public class CommandsProfile : Profile
    {
        public CommandsProfile()        
        {
            CreateMap<Command, CommandReadDto>();
        }
    }
}
