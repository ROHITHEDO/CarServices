using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Interfaces
{
   public interface IGenericCrud<T> where T : class
    {
        Task<List<T>> GetAll();
        Task<T> GetById(object id);

        void Insert(T obj);

        void Save();
        Task<bool> Delete(Guid id);
    }
}
