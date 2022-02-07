using AutoMapper;
using Data.Entities.Dto;
using DemoGrpc.Protobufs.User.V1;
using Grpc.Core;
using System.Threading.Tasks;

namespace DemoGrpc.Web.Services.V1
{
    public class UserGRPCService : UserService.UserServiceBase
    {
        private readonly IMapper _mapper;
        private readonly Domain.Services.Users.IUserService _userService;

        public UserGRPCService(
                IMapper mapper,
                Domain.Services.Users.IUserService userService
            )
        {
            _mapper = mapper;
            _userService = userService;
        }
        public override async Task GetAllStreamed(EmptyRequest request, IServerStreamWriter<UserReply> responseStream, ServerCallContext context)
        {
            var headers = context.GetHttpContext().Request.Headers;
            var lst = await _userService.GetAllAsync();

            foreach (var user in lst)
            {
                UserReply reply = _mapper.Map<UserReply>(user);
                await responseStream.WriteAsync(reply);
                Task.Delay(5000).Wait();
            }
            await Task.CompletedTask;
        }

        //[Authorize]
        public override async Task<UsersReply> GetAll(EmptyRequest request, ServerCallContext context)
        {
            //throw new RpcException(new Status(StatusCode.Internal, "Internal error"), "Internal error occured");
            var users = await _userService.GetAllAsync();
            return _mapper.Map<UsersReply>(users);
        }

        //[Authorize]
        public override async Task<UserReply> GetById(UserSearchRequest request, ServerCallContext context)
        {
            var user = await _userService.GetByIdAsync(request.UserId);
            return _mapper.Map<UserReply>(user);
        }

        //[Authorize]
        public override async Task<UserReply> Create(UserCreateRequest request, ServerCallContext context)
        {
            //var currentUser = context.GetHttpContext().User;
            //throw new RpcException(new Status(StatusCode.InvalidArgument,"test"), "test");
            var createUser = _mapper.Map<User>(request);
            var user = await _userService.AddAsync(createUser);
            return _mapper.Map<UserReply>(user);
        }

        //[Authorize]
        public override async Task<UserReply> Update(UserRequest request, ServerCallContext context)
        {
            //var currentUser = context.GetHttpContext().User;
            var updateUser = _mapper.Map<User>(request);
            var user = await _userService.UpdateAsync(updateUser);
            return _mapper.Map<UserReply>(user);
        }

        //[Authorize]
        public override async Task<EmptyReply> Delete(UserSearchRequest request, ServerCallContext context)
        {
            //var currentUser = context.GetHttpContext().User;
            await _userService.RemoveByIdAsync(request.UserId);
            return new EmptyReply();
        }
    }
}
