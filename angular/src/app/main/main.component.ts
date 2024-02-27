import { Component, OnChanges, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { UsersessionService } from '../services/sessionstore/usersession.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  loginUser: any = null;
  name: string = '';
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
  };

  constructor(private session : UsersessionService){}
  

  ngOnInit(): void {
    
    this.loginUser = this.session.getsession();
    if (this.loginUser) {

      this.name = this.loginUser.nameinit;
    }
  }

  
  
  
 

 
  // loggedUser =  this.session.getsession(this.user)["nameinit"];
  
}
