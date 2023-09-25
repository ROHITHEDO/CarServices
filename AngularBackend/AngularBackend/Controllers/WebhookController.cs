using DataAccessLayer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace AngularBackend.Controllers
{
    [Route("stripe")]
    public class WebhookController : Controller
    {
        const string endpointSecret = "whsec_MIyxmee4wfO7DbeVk5vMrXVzlUwP5Ei8";

        [AllowAnonymous]
        [HttpPost("webhook")]
        public async Task<IActionResult> StripeWebHook()
        {
            var response = new ApiResponse();
            try
            {
                var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();


                var stripeEvent = EventUtility.ConstructEvent(
                    json: json,
                    stripeSignatureHeader: Request.Headers["Stripe-Signature"],
                    secret: endpointSecret,
                    throwOnApiVersionMismatch: false
                    );

                if (stripeEvent.Type == Events.PaymentIntentSucceeded)
                {
                    var subscription = stripeEvent.Data.Object as Subscription;
                }
                else
                {
                    Console.WriteLine("Unhandled event type: {0}", stripeEvent.Type);
                }
                return Ok();
            }
            catch (Exception e)
            {
                response.Success = false;
                response.ErrorMessage = e.Message;
                return BadRequest(response);
            }
        }

    }
}

