using HomeWork_Sophie_BackToFront.Models;
using Microsoft.EntityFrameworkCore;

namespace HomeWork_Sophie_BackToFront.Data
{
    public class AppDbContext:DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext>options):base(options) { }

        public DbSet<Slider> Sliders { get; set; }

    }
}
