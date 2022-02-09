import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { UserCreateRequest } from 'proto/generated/proto/user_pb';
import { UserService } from 'proto/generated/proto/user_pb_service';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserGRPCService {

  constructor() { }

  signUp(model : User){
    const getUserRequest = new UserCreateRequest();
    getUserRequest.setEmail(model.Email);
    getUserRequest.setFirstname(model.FirstName);
    getUserRequest.setLastname(model.LastName);
    getUserRequest.setUsername(model.UserName);
    getUserRequest.setPassword(model.Password);

    grpc.unary(UserService.Create, {
      request: getUserRequest,
      host: environment.baseUrl,
      onEnd: (res) => {
        console.log(res);
      }
    });
  }
}
