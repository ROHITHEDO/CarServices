using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class AddModel
    {
        public Guid Id { get; set; }
        public string Brand { get; set; }

        public double pricePerHour { get; set; }
        public string Description { get; set; }
    }
}
