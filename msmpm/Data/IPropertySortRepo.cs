using System.Collections.Generic;
using MSMBackend.Models;

namespace MSMBackend.Data
{
    public interface IPropertySortRepo
    {
        //This interface may be completely pointless BTW

        public IEnumerable<Property> SortByTime(IEnumerable<Property> props);

        public IEnumerable<Property> SortByAverage(IEnumerable<Property> props);

        public IEnumerable<Property> SortByAlphabetical(IEnumerable<Property> props);
    }
}
