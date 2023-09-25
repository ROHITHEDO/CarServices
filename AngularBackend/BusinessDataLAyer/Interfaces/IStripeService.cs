using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Interfaces
{
    public interface IStripeService
    {
        Task<CustomerModel> CreateCustomer(CreateCustomerModel resource, CancellationToken cancellationToken);
    }
}
