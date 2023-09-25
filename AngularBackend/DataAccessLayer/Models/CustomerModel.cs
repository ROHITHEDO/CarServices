using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class CustomerModel
    {
        public CustomerModel(string email, string name, string token, string stripeCustomerID)
        {
            Email = email;
            Name = name;
            Token = token;
            StripeCustomerID = stripeCustomerID;
        }
        public CustomerModel()
        {

        }
        public Guid CustomerId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Token { get; set; }
        public string StripeCustomerID { get; set; }

    }
}
