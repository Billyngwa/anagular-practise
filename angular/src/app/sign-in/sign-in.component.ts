import { Component, OnInit } from '@angular/core';
import {IUser } from '../interfaces/user.interface';
import { UserService } from '../services/userService/user.service';
import { UsersessionService } from '../services/sessionstore/usersession.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(private store:UserService,private session:UsersessionService){}
  ngOnInit(): void {
    // this.session.receiveValue(this.user)
  }
  user : IUser = {
    id : 0,
    name : "",
    email: "",
    password:""
  };
disabled = true;
  submitForm(){
    this.store.signIn(this.user);
    this.session.crtsession(this.user);

    // this.store.signUp(this.user)
  }
}
