using Data.Entities.AppDbContext;
using Data.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Services.Users
{
    public class UserService : RepositoryBase<User>, IUserService
    {
        public UserService(AppDbContext context) : base(context)
        {

        }
    }
}


 