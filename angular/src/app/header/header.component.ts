import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/userService/user.service';
import { UsersessionService } from '../services/sessionstore/usersession.service';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'mathieu',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',]
})
export class HeaderComponent  {
  @Input() loggedUser:string='';
  
  constructor(private userservice: UserService, private session: UsersessionService) { }
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  userState = this.userservice.bool.loginStatus
  buttonType: string = 'button'
  sectionClass: string = 'header-section';
  logoutfnx() {
    this.session.dltsession(this.user);
  }
}
