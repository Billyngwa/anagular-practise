import { Component } from '@angular/core';
import { UserService } from '../services/userService/user.service';
import { IUser } from '../interfaces/user.interface';
UserService

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private store : UserService){}
  user : IUser = {
    id : 0,
    name : "",
    email: "",
    password:""
  };
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
    window.location.replace("/sign-in");

  }
}
