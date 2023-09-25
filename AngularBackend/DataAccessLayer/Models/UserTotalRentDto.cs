using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class UserTotalRentDto
    {
        public Guid id { get; set; }
        public string UserName { get; set; }
        public string TotalRent { get; set; }

        public string _StripePriceID { get; set; }

        public string _StripeProductId { get; set; }
    }
}
