import { Component, OnChanges, OnInit } from '@angular/core';
import {IUser } from '../interfaces/user.interface';
import { UserService } from '../services/userService/user.service';
import { UsersessionService } from '../services/sessionstore/usersession.service';
import { BooleanConstants } from '../constants/booleanconstants.enum';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import {HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private store:UserService,
    private session:UsersessionService,
    private myRoute:Router,
    ){}
  
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    password: "",
  }
  submitForm(){
    if(this.user.email == "" && this.user.password == ""){
      alert(`fill in form fields`);
      return;
    }
    if(this.user.email == ""){
      alert(`fill in email field`);
      return;
    }
    if(this.user.password == ""){
      alert(`fill in password field`);
      return;
    }

    this.store.signIn(this.user);
    this.session.crtsession(this.user);
  }
}
