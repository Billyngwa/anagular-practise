import { Component } from '@angular/core';
import { UserService } from '../services/userService/user.service';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
UserService

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private store : UserService, private myRoute:Router){}
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
  Register(){
    if(this.user.name == ""){
      alert("User name required");
      return;
    }
    if(this.user.email == ""){
      alert("User email required");
      return;
    }
    if(this.user.email.includes("@") == false){
        alert("valid email required");
        return;
    }
    if(this.user.password == ""){
      alert("password required");
      return;
    }
    
    this.store.signUp(this.user);
    this.myRoute.navigate(["/sign-in"]);
  }
}
