using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class BookedCar
    {
        public Guid Id { get; set; }

        public Guid CarId { get;set; }
        public string UserName { get; set; }
        public string ModelName { get; set; }
        public DateTime To { get; set; }
        public DateTime From { get; set; }
        public string Price { get; set; }
        public long TotalRent { get; set; }

        //public string _StripePriceID { get; set; }

        //public string _StripeProductId { get; set; }
        public CarModel Car { get; set; }
    }
}
