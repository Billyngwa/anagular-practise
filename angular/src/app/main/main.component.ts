import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { UsersessionService } from '../services/sessionstore/usersession.service';
import { TaskStatus } from '../constants/constants.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    password: ""
    userTasks:{
      name:"",
      description:"",
      dueDate:"",
      startDate:"",
      status:TaskStatus.FAILED,
    }
  }
  constructor(private session : UsersessionService){}

  name: string ='';

  ngOnInit(): void {
   this.name =  this.session.getsession(this.user)["nameinit"];
  }
}
