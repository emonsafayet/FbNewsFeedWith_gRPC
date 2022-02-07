using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Services
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> GetAll();
        Task<IQueryable<T>> GetAllAsync();
        IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression);
        Task<T> AddAsync(T entity);
        Task<T> UpdateAsync(T entity);
        Task RemoveByIdAsync(int Id);
        Task RemoveAsync(T entity);
        Task SaveChangesAsync();
        Task<T> GetByIdAsync(int id);
        Task<IList<T>> AddRangeAsync(List<T> entitys);       
        Task<List<T>> ExecuteStoredProcedureAsync(string procedureName, params object[] parameters);
        Task<IQueryable<object>> ExecuteProcedureObjectAsync(string procedureName, params object[] parameters);
    }

}
