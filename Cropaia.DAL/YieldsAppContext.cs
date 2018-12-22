using Cropaia.DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Cropaia.DAL
{
    public class YieldsAppContext : DbContext
    {
        private readonly ILoggerFactory _loggerFactory;
        public DbSet<Crop> Crops { get; set; }

        public YieldsAppContext(DbContextOptions<YieldsAppContext> options, ILoggerFactory loggerFactory)
            : base(options)
        {
            _loggerFactory = loggerFactory;

        }
      

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseLoggerFactory(_loggerFactory);
        }
    }
}
