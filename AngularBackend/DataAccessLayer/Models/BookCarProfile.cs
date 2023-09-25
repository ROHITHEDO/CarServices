using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class BookCarProfile:Profile
    {
        public BookCarProfile() {
            CreateMap<BookedCarDto,BookedCar>();
            CreateMap<BookedCar, BookedCarDto>();
        }
    }
}
