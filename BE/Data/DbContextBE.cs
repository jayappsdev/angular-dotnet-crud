using BE.Models;
using Microsoft.EntityFrameworkCore;

namespace BE.Data
{
    public class DbContextBE : DbContext
    {
        public DbContextBE(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
