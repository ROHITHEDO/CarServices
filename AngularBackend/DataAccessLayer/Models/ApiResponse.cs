using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class ApiResponse
    {
        public ApiResponse() { }

        public bool Success { get; set; }
        public string Message { get; set; }
        public string ErrorMessage { get; set; }
        public object Data { get; set; }
     
    }
}
