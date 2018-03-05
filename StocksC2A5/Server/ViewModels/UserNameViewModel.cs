using System.ComponentModel.DataAnnotations;

namespace StocksC2A5.Server.ViewModels
{
    public class UserNameViewModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
    }
}
