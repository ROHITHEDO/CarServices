using Stripe.Checkout;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class SessionPaymentIntentDataOptions1: SessionPaymentIntentDataOptions
    {
        public string PaymentIntent { get;set; }
    }
}
