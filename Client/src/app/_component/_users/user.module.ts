import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    SignupComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    UserRoutingModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
