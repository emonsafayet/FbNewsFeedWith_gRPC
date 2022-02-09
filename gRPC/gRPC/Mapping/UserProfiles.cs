using AutoMapper;
using Data.Entities.Dto;
using DemoGrpc.Protobufs.User.V1;
using System.Collections.Generic;

namespace DemoGrpc.Web.Mapping
{
    public class UserProfilesV1 : Profile
    {
        public UserProfilesV1()
        {
            CreateMap<User, UserReply>()
                .ForMember(dest => dest.Id, source => source.MapFrom(source => source.Id))
                .ForMember(dest => dest.UserName, source => source.MapFrom(src => src.UserName))
                .ForMember(dest => dest.Email, source => source.MapFrom(src => src.Email))
                .ForMember(dest => dest.FirstName, source => source.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, source => source.MapFrom(src => src.LastName));

            CreateMap<IEnumerable<User>, UsersReply>()
            .ForMember(dest => dest.Users, source => source.MapFrom(src => src));

            CreateMap<UserCreateRequest, User>()
            .ForMember(dest => dest.UserName, source => source.MapFrom(src => src.UserName))
            .ForMember(dest => dest.FirstName, source => source.MapFrom(src => src.FirstName))
            .ForMember(dest => dest.LastName, source => source.MapFrom(src => src.LastName))
            .ForMember(dest => dest.Email, source => source.MapFrom(src => src.Email));

            CreateMap<UserRequest, User>()
            .ForMember(dest => dest.Id, source => source.MapFrom(src => src.Id))
            .ForMember(dest => dest.UserName, source => source.MapFrom(src => src.UserName))
            .ForMember(dest => dest.FirstName, source => source.MapFrom(src => src.FirstName))
            .ForMember(dest => dest.LastName, source => source.MapFrom(src => src.LastName))
            .ForMember(dest => dest.Email, source => source.MapFrom(src => src.Email));
        }
    }
}
