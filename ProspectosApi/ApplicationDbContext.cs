
using Microsoft.EntityFrameworkCore;

namespace ProspectosApi
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Prospecto> Prospecto { get; set; }

        public DbSet<Domicilio> Domicilio { get; set; }
    }
}