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
  constructor(private sessionstore: SessionstorageService, private database: DatabaseService) { }

  // Creating a session for the user
  crtsession(user: IUser) {
    const getUsersInLocalStorage = this.database.get("Users");
    if(getUsersInLocalStorage.data == null){
      alert(`An error occured`);
      return;
    }
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


  // getting a users session with session storage
  getsession() {
    let userInScope = this.sessionstore.get("loggedUser");
    
    if (userInScope.status) {
      let someValue = {
        id: userInScope.data["id"],
        nameinit: userInScope.data["name"]
      }
      return someValue; 
    }

    return null;
  }

  // deleting a users session
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

