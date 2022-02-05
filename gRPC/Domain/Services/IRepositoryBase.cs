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
        IQueryable<T> FindAll();
        Task<IQueryable<T>> FindAllAsync();
        IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task SaveChangesAsync();
        Task<T> FindByIdAsync(int id);
        Task<IList<T>> CreateRangeAsync(List<T> entitys);       
        Task<List<T>> ExecuteStoredProcedureAsync(string procedureName, params object[] parameters);
        Task<IQueryable<object>> ExecuteProcedureObjectAsync(string procedureName, params object[] parameters);
    }

}
