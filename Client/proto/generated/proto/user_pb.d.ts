// package: v1
// file: proto/user.proto

import * as jspb from "google-protobuf";

export class EmptyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
  }
}

export class EmptyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyReply.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyReply): EmptyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyReply;
  static deserializeBinaryFromReader(message: EmptyReply, reader: jspb.BinaryReader): EmptyReply;
}

export namespace EmptyReply {
  export type AsObject = {
  }
}

export class UserSearchRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserSearchRequest): UserSearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchRequest;
  static deserializeBinaryFromReader(message: UserSearchRequest, reader: jspb.BinaryReader): UserSearchRequest;
}

export namespace UserSearchRequest {
  export type AsObject = {
    userid: number,
  }
}

export class UserCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserCreateRequest): UserCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCreateRequest;
  static deserializeBinaryFromReader(message: UserCreateRequest, reader: jspb.BinaryReader): UserCreateRequest;
}

export namespace UserCreateRequest {
  export type AsObject = {
    name: string,
    email: string,
    firstname: string,
    lastname: string,
  }
}

export class UserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    id: number,
    name: string,
    email: string,
    firstname: string,
    lastname: string,
  }
}

export class UserReply extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserReply.AsObject;
  static toObject(includeInstance: boolean, msg: UserReply): UserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserReply;
  static deserializeBinaryFromReader(message: UserReply, reader: jspb.BinaryReader): UserReply;
}

export namespace UserReply {
  export type AsObject = {
    id: number,
    name: string,
    email: string,
    firstname: string,
    lastname: string,
  }
}

export class UsersReply extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<UserReply>;
  setUsersList(value: Array<UserReply>): void;
  addUsers(value?: UserReply, index?: number): UserReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersReply.AsObject;
  static toObject(includeInstance: boolean, msg: UsersReply): UsersReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersReply;
  static deserializeBinaryFromReader(message: UsersReply, reader: jspb.BinaryReader): UsersReply;
}

export namespace UsersReply {
  export type AsObject = {
    usersList: Array<UserReply.AsObject>,
  }
}

