using HomeWork_Sophie_BackToFront.Data;
using HomeWork_Sophie_BackToFront.Models;
using Microsoft.AspNetCore.Mvc;


namespace HomeWork_Sophie_BackToFront.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public HomeController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IActionResult Index()
        {
            List<Slider> slider = _appDbContext.Sliders.ToList();

            return View(slider);
        }
    }
}