import { Injectable } from '@angular/core';
import { BooleanConstants } from 'src/app/constants/booleanconstants.enum';
import { IUser } from 'src/app/interfaces/user.interface';
import { SessionstorageService } from './sessionstorage.service';
import { DatabaseService } from '../localstore/database.service';
// import { ReplaySubject, window } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersessionService {
  // user: IUser = {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   password: ""
  // };
  constructor(private sessionstore: SessionstorageService, private database: DatabaseService) { }
  // private sessionHolder = new ReplaySubject();
  // bool = new BooleanConstants();
  // receiveValue = (user:IUser)=> this.sessionHolder.next(this.getsession(user)["nameinit"]);// this is the value to be pumped from the first component
  // addValue = this.sessionHolder.asObservable(); // addvalue acts as an observable wher components can subscribe to changes
  crtsession(user: IUser) {
    const getUsersInLocalStorage = this.database.get("Users");
    for (const userObject of getUsersInLocalStorage.data) {

      if (user["email"] === userObject["email"] && user["password"] === userObject["password"]) {
        user["name"] = userObject["name"];
        user["id"] = userObject["id"];
        this.sessionstore.set("loggedUser", user);

      } else {
        continue
      }
      return
    }

  }
  getsession() {
    let userInScope = this.sessionstore.get("loggedUser");
    console.log(userInScope);
    console.log(Object.keys(userInScope).length);
    
    if (userInScope.status) {
      let someValue = {
        id: userInScope.data["id"],
        nameinit: userInScope.data["name"]
      }
      return someValue; 
    }

    return null;
  }
  dltsession(user:IUser) { 
    this.sessionstore.clear();
    if(this.sessionstore.clear().status === true){
      window.location.replace("/sign-in");
    }
    else{
      return;
    }
  }
}

