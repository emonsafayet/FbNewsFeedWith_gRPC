import { Component, OnInit } from '@angular/core';
import { UserGRPCService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList :any = [];
  constructor( private userGrpcService : UserGRPCService) { }

  ngOnInit(): void {
    this.userGrpcService.getAll();
    this.userGrpcService.userListSubscriber.subscribe((data)=>{
        this.userList = data;
        console.log(this.userList);
    });
  }

}
