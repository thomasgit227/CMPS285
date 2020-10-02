﻿using Microsoft.AspNetCore.Authentication;
using MSMBackend.Models;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MSMBackend.Data
{
    public class SqlPropertyRepo : IPropertyRepo
    {
        private readonly PropertyContext _context;

        public SqlPropertyRepo(PropertyContext context)
        {
            _context = context;
        }

        public void CreateProperty(Property property)
        {
            if(property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }

            _context.Properties.Add(property);

        }

        public void DeleteProperty(Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }
            _context.Properties.Remove(property);

        }

        public IEnumerable<Property> GetAllProperties()
        {
            return _context.Properties.ToList();    
        }

        public Property GetPropertyById(int id)
        {
            return _context.Properties.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateProperty(Property property)
        {
            //Nothing, DBContext does this for is
        }

        public int AverageAttributeRating(Property property)
        {
            if (property == null)
            {
                throw new ArgumentNullException(nameof(property));
            }

            int avg = property.Roof + property.ExtWalls + property.ExtOpenings + property.Framework + property.Piers;
            avg += property.Chimney + property.Door + property.Windows + property.Shutters + property.Flooring;

            if (property.Utilities)
            {
                avg += property.Electrical + property.Plumbing + property.Sewer + property.HVAC;

                avg = avg / 14;
            }
            else
            {
                avg = avg / 10;
            }

            return avg;
        }

        public IEnumerable<Property> BestProperties(int max = 10)
        {
            IEnumerable<Property> allProps = GetAllProperties();
            Property[] props = new Property[max];

            int len = max - 1;
            foreach (Property p in allProps)
            {
                if (props[len] == null)
                    props[len] = p;

                int j = len;
                while (j >= 1)
                {
                    if (props[j - 1] == null)
                    {
                        props[j - 1] = p;
                        props[j] = null;
                    }
                    else if (AverageAttributeRating(props[j - 1]) < AverageAttributeRating(p))
                    {
                        Property x = props[j - 1];
                        props[j - 1] = p;
                        props[j] = x;

                    }

                    j--;
                }
            }
            return props.ToList();
        }

        private int CompareTime(Property a, Property b)
        {
            return a.EditTime.CompareTo(b.EditTime);
        }

        public IEnumerable<Property> RecentProperties(int max = 5)
        {
            IEnumerable<Property> allProps = GetAllProperties();
            Property[] props = new Property[max];

            int len = max - 1;
            foreach (Property p in allProps)
            {
                if (props[len] == null)
                    props[len] = p;

                int j = len;
                while (j >= 1)
                {
                    if (props[j - 1] == null)
                    {
                        props[j - 1] = p;
                        props[j] = null;
                    }
                    else if (CompareTime(props[j - 1], p) < 0)
                    {
                        Property x = props[j - 1];
                        props[j - 1] = p;
                        props[j] = x;

                    }
                    j--;
                }
            }
            return props.ToList();
        }
    }
}
