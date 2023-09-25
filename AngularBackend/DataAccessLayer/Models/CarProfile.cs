using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class CarProfile:Profile
    {
        public CarProfile() 
        {
            CreateMap<AddModel,CarModel>();
            CreateMap<CarModel,AddModel>();
        }

    }
}
