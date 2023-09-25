using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class ApplyCouponModel
    {
        public double PercentOff { get; set; }
        public string Duration { get; set; }
        public int DurationInMonths { get; set; }
        // Add other properties as needed for your coupon
    }
}
