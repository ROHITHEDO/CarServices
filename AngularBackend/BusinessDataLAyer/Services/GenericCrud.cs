using BusinessAccessLayer.Interfaces;
using BusinessAccessLayer.Services;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;

namespace BusinessAccessLayer.Services
{
    public class GenericCrud<T> : IGenericCrud<T> where T : class
    {
        private readonly AngularDbContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericCrud(AngularDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

      

        public async Task<List<T>> GetAll()
        {
            return _dbSet.ToList();
        }
        
        public async Task<T> GetById(object id)
        {
            return _dbSet.Find(id);
        }

        public void Insert(T obj)
        {
            _dbSet.Add(obj);
        }

        public async Task<bool> Delete(Guid id)
        {
            var entity = await _dbSet.FindAsync(id);
            if (entity != null)
            {
                _dbSet.Remove(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
