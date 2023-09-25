using DataAccessLayer.DbContext;
using DataAccessLayer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Services
{
    public class ItemService
    {
        private readonly AngularDbContext _context;
       public ItemService(AngularDbContext context)
        {
            _context = context;
        }

        public string CalculateTotalRent(BookedCarDto bookedCar)
        {
           
            if (bookedCar.From > bookedCar.To)
            {
                throw new ArgumentException("The 'From' date should be less than the 'To' date.");
            }
            TimeSpan duration = bookedCar.To - bookedCar.From;
            string totalHours = duration.TotalHours.ToString();
            //double totalRent = totalHours * bookedCar.Price;
            return totalHours;
        }

        public async Task<bool> IsCarAvailable(Guid carId, DateTime from, DateTime to)
        {
            return await _context.bookcar.AllAsync(cb =>
                cb.CarId != carId ||
                (from >= cb.To || to <= cb.From)
            );
        }
        public string CalculateHours(DateTime from, DateTime to)
        {
            TimeSpan duration = to - from;
            return duration.TotalHours.ToString();
        }
    }
}
