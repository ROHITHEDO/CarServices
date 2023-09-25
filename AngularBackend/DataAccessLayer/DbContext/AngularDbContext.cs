using DataAccessLayer.Configuration;
using DataAccessLayer.Models;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.DbContext
{
    public class AngularDbContext : IdentityDbContext<IdentityUser>
    {
        public AngularDbContext(DbContextOptions<AngularDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new RoleConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new UserRoleConfiguration());
            builder.Entity<CarModel>().HasKey(c => c.Id);
            builder.Entity<BookedCar>().HasKey(cb => cb.Id);
            builder.Entity<BookedCar>().HasOne(cb => cb.Car).WithMany().HasForeignKey(cb => cb.CarId);
        }
        public DbSet<CarModel> cars { get; set; }
         
        public DbSet<BookedCar> bookcar { get;set; }

        public DbSet<UserTotalRentDto> userTotalRent { get; set; }

        //public DbSet<CustomerModel> customers { get; set; }
    }
}
