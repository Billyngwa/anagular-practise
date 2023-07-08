import { Component } from '@angular/core';
import { UserService } from '../services/userService/user.service';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
UserService

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss','../sign-in/sign-in.component.scss']
})
export class SignUpComponent {
  constructor(private store : UserService, private myRoute:Router,private firestore:Firestore){}
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    password: "",
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
