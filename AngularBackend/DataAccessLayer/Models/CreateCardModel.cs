using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class CreateCardModel
    {
        public CreateCardModel()
        {

        }
        public string? Name { get; set; }
        public string? Number { get; set; }
        public string? ExpiryYear { get; set; }
        public string? ExpiryMonth { get; set; }
        public string? Cvc { get; set; }
    }
}
