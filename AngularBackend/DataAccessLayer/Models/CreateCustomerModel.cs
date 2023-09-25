using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class CreateCustomerModel
    {
        public CreateCustomerModel()
        {

        }
        public string Email { get; set; }
        public string Name { get; set; }
        public CreateCardModel Card { get; set; }
    }
}
