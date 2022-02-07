// package: v1
// file: proto/user.proto

import * as proto_user_pb from "../proto/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceGetAll = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_pb.EmptyRequest;
  readonly responseType: typeof proto_user_pb.UsersReply;
};

type UserServiceGetAllStreamed = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_user_pb.EmptyRequest;
  readonly responseType: typeof proto_user_pb.UserReply;
};

type UserServiceGetById = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_pb.UserSearchRequest;
  readonly responseType: typeof proto_user_pb.UserReply;
};

type UserServiceCreate = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_pb.UserCreateRequest;
  readonly responseType: typeof proto_user_pb.UserReply;
};

type UserServiceUpdate = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_pb.UserRequest;
  readonly responseType: typeof proto_user_pb.UserReply;
};

type UserServiceDelete = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_user_pb.UserSearchRequest;
  readonly responseType: typeof proto_user_pb.EmptyReply;
};

export class UserService {
  static readonly serviceName: string;
  static readonly GetAll: UserServiceGetAll;
  static readonly GetAllStreamed: UserServiceGetAllStreamed;
  static readonly GetById: UserServiceGetById;
  static readonly Create: UserServiceCreate;
  static readonly Update: UserServiceUpdate;
  static readonly Delete: UserServiceDelete;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAll(
    requestMessage: proto_user_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UsersReply|null) => void
  ): UnaryResponse;
  getAll(
    requestMessage: proto_user_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UsersReply|null) => void
  ): UnaryResponse;
  getAllStreamed(requestMessage: proto_user_pb.EmptyRequest, metadata?: grpc.Metadata): ResponseStream<proto_user_pb.UserReply>;
  getById(
    requestMessage: proto_user_pb.UserSearchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UserReply|null) => void
  ): UnaryResponse;
  getById(
    requestMessage: proto_user_pb.UserSearchRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UserReply|null) => void
  ): UnaryResponse;
  create(
    requestMessage: proto_user_pb.UserCreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UserReply|null) => void
  ): UnaryResponse;
  create(
    requestMessage: proto_user_pb.UserCreateRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UserReply|null) => void
  ): UnaryResponse;
  update(
    requestMessage: proto_user_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UserReply|null) => void
  ): UnaryResponse;
  update(
    requestMessage: proto_user_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.UserReply|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: proto_user_pb.UserSearchRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.EmptyReply|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: proto_user_pb.UserSearchRequest,
    callback: (error: ServiceError|null, responseMessage: proto_user_pb.EmptyReply|null) => void
  ): UnaryResponse;
}

