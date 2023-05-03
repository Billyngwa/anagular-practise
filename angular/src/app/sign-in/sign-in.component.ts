import { Component, OnChanges, OnInit } from '@angular/core';
import {IUser } from '../interfaces/user.interface';
import { UserService } from '../services/userService/user.service';
import { UsersessionService } from '../services/sessionstore/usersession.service';
import { BooleanConstants } from '../constants/booleanconstants.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnChanges {
  constructor(private store:UserService,private session:UsersessionService){}
   loginStatus = new BooleanConstants();
   ngOnChanges(): void {
  
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
      userId:"",
      id:0
      
    }
  }
  submitForm(){
    this.store.signIn(this.user);
    this.session.crtsession(this.user);
  }
}
