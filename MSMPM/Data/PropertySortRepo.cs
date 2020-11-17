using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using MSMBackend.Models;
using SQLitePCL;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Security.Cryptography.X509Certificates;

namespace MSMBackend.Data
{
    public class PropertySortRepo: IPropertySortRepo
    {
        public PropertySortRepo()
        {
            //We should not need anything in this constructor
        }

        public IEnumerable<Property> SortByTime(IEnumerable<Property> props)
        {
            List<Property> sorted = props.ToList();

            sorted.Sort(new Comparison<Property>((x, y) => y.CompareTime(x)));

            return sorted;
        }

        public IEnumerable<Property> SortByAverage(IEnumerable<Property> props)
        {
            List<Property> sorted = props.ToList();

            sorted.OrderBy(x => x.Average());

            sorted.Reverse();

            return sorted;
        }

        public IEnumerable<Property> SortByAlphabetical(IEnumerable<Property> props)
        {
            List<Property> sorted = props.ToList();

            sorted.OrderBy(x => x.Name);

            return sorted;
        }
    }
}
