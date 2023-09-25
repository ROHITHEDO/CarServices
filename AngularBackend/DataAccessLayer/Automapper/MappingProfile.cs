
using AutoMapper;
using DataAccessLayer.Models;

public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Stripe.Customer, Customer>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.LastName, opt => opt.Ignore())
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.Phone))
                .ForMember(dest => dest.Token, opt => opt.Ignore()) // Assuming Token is not available in the source class
                .ForMember(dest => dest.StripeCustomerID, opt => opt.MapFrom(src => src.Id.ToString()))
                .ForMember(dest => dest.Id, opt => opt.Ignore());
        }
    }


