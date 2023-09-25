using AutoMapper;
using BusinessAccessLayer.Interfaces;
using DataAccessLayer.DbContext;
using DataAccessLayer.Models;
using Stripe;

public class StripeService : IStripeService
{
    private readonly CustomerService _customerService;
    private readonly IMapper _mapper;
    private readonly TokenService _tokenService;


    public StripeService(
        TokenService tokenService,
        CustomerService customerService, IMapper mapper)
    {
        _customerService = customerService;
        _mapper = mapper;
        _tokenService= tokenService;
    }

    public async Task<CustomerModel> CreateCustomer(CreateCustomerModel resource, CancellationToken cancellationToken)
    {
        var tokenOptions = new TokenCreateOptions
        {
            Card = new TokenCardOptions
            {
                Name = resource.Card.Name,
                Number = resource.Card.Number,
                ExpYear = resource.Card.ExpiryYear,
                ExpMonth = resource.Card.ExpiryMonth,
                Cvc = resource.Card.Cvc
            }
        };
        try
        {
            var token = await _tokenService.CreateAsync(tokenOptions, null, cancellationToken);

            //var service = new TokenService();
            //var token = service.Create(tokenOptions);

            var customerOptions = new CustomerCreateOptions
            {
                Email = resource.Email,
                Name = resource.Name

            };
            var customer = await _customerService.CreateAsync(customerOptions, null, cancellationToken);


            var mappedCustomer = _mapper.Map<DataAccessLayer.Models.Customer>(customer);
            mappedCustomer.Token = token.Id;
            mappedCustomer.StripeCustomerID = customer.Id;


            return new CustomerModel(mappedCustomer.Email, mappedCustomer.Name, mappedCustomer.Token, mappedCustomer.StripeCustomerID);
        }
        catch (Exception ex)
        {
            throw;
        }
    }
}



    