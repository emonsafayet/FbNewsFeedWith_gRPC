import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { UserCreateRequest,EmptyRequest, UsersReply } from 'proto/generated/proto/user_pb';
import { UserService } from 'proto/generated/proto/user_pb_service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserGRPCService {
 public userListSubscriber = new Subject<any>();
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

  getAll(){ 
    const getUserRequest = new EmptyRequest();
    var users=[];
    grpc.unary(UserService.GetAll, {
      request: getUserRequest,
      host: environment.baseUrl,
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
        var result = message.toObject() as UsersReply.AsObject;
        users = result.usersList.map(user => 
          <User>({
            UserName: user.username, 
            FirstName: user.firstname, 
            LastName: user.lastname, 
            Email: user.email, 
          }));
          this.userListSubscriber.next(users); 
        }
      }
    });
  }
}
