import { Component, OnInit } from '@angular/core';
import {IUser } from '../interfaces/user.interface';
import { UserService } from '../services/userService/user.service';
import { UsersessionService } from '../services/sessionstore/usersession.service';
import { BooleanConstants } from '../constants/booleanconstants.enum';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(private store:UserService,private session:UsersessionService){}
   loginStatus = new BooleanConstants()
  ngOnInit(): void {
    // this.session.receiveValue(this.user)
  }
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    password: "",
    userTasks:{
      taskName:"",
      description:"",
      startDate:"",
      dueDate:"",
      status:"",
      difficulty:"",
      level:"",
      userId:""

    }
  }
  submitForm(){
    this.store.signIn(this.user);
    this.session.crtsession(this.user);

    // this.store.signUp(this.user)
  }
}
