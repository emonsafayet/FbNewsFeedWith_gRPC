using Data.Entities.AppDbContext;
using Data.Entities.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Services
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : DtoBase
    {
        private readonly AppDbContext _context;

        public RepositoryBase(AppDbContext context)
        {
            _context = context;
        }

        public async Task<T> AddAsync(T entity)
        {
            await this._context.Set<T>().AddAsync(entity);
            await SaveChangesAsync();
            return entity;
        }

        public async Task<IList<T>> AddRangeAsync(List<T> entitys)
        {
            await this._context.Set<T>().AddRangeAsync(entitys);
            await SaveChangesAsync();
            return entitys;
        }

        public async Task RemoveAsync(T entity)
        {
            this._context.Set<T>().Remove(entity);
            await SaveChangesAsync();
        }

        public IQueryable<T> GetAll()
        {
            return this._context.Set<T>().AsNoTracking();
        }

        public Task<IQueryable<T>> GetAllAsync()
        {
            var queryableList = this._context.Set<T>().AsNoTracking();
            return Task.FromResult(queryableList);
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this._context.Set<T>().Where(expression).AsNoTracking();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            T data = await this._context.Set<T>().Where(x => x.Id == id).FirstOrDefaultAsync();
            return data;
        }

        public async Task SaveChangesAsync()
        {
            await this._context.SaveChangesAsync();
        }

        public async Task<T> UpdateAsync(T entity)
        {
            this._context.Set<T>().Update(entity);
            await SaveChangesAsync();
            return entity;
        }

        public Task<List<T>> ExecuteStoredProcedureAsync(string procedureName, params object[] parameters)
        {
            var result = _context.Set<T>().FromSqlRaw(procedureName, parameters).AsEnumerable().Select(x => (T)x).ToList();
            return Task.FromResult(result);
        }

        public Task<IQueryable<object>> ExecuteProcedureObjectAsync(string procedureName, params object[] parameters)
        {
            var result = _context.Set<object>().FromSqlRaw(procedureName, parameters)
                                 .AsEnumerable()
                                 .Select(e => (object)e)
                                 .AsQueryable();

            return Task.FromResult(result);
        }

        public async Task RemoveByIdAsync(int Id)
        {
            T entity = await GetByIdAsync(Id);
            await RemoveAsync(entity);
        }
    }
}
