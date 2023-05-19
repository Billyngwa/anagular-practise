import { Injectable } from '@angular/core';
import { DatabaseService } from '../localstore/database.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { BooleanConstants } from 'src/app/constants/booleanconstants.enum';
import { SessionstorageService } from '../sessionstore/sessionstorage.service';
import { Route, Router } from '@angular/router';
import {} from '@angular/fire/compat/auth'
DatabaseService
BooleanConstants
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private databaseService: DatabaseService, private myRoute:Router, private session: SessionstorageService) { }
  bool = new BooleanConstants();

  signIn(user: IUser) {
    const getUsersInLocalStorage = this.databaseService.get("Users");
    let loginStatus;
    if(getUsersInLocalStorage.data == null){
      alert(`Account Does not exist`);
      return
    }
    for (const userObject of getUsersInLocalStorage.data) {
      if (user["email"] === userObject["email"] && user["password"] === userObject["password"]) {
        alert(`${userObject["name"]} logged in with success`);
        this.bool.loginStatus = true;
        console.log(`login status: ${this.bool.loginStatus}`);
      this.myRoute.navigate(["/main"]);

        return;
      }
      else {
        continue;
      }
    }
    
    alert(`password or email do not match`);
    this.bool.loginStatus = false;
    console.log("Login status :",this.bool.loginStatus);
    
    return;

  }
  signUp(user: IUser) {
    const getUsersInLocalStorage = this.databaseService.get("Users");
    let usersInLocalStorage: Object[] = [];
    console.log(typeof usersInLocalStorage);
    
    if (getUsersInLocalStorage.status === true) {
    console.log(typeof getUsersInLocalStorage.data);
    
      usersInLocalStorage = getUsersInLocalStorage.data;
      console.log(typeof usersInLocalStorage);
      
      console.log(usersInLocalStorage);
      
      // return usersInLocalStorage ;
    }
    for (const users of usersInLocalStorage) {
      if (user.name === users["name" as keyof object]) {
        alert("User exist");
        return;
      }
      if (user.email === users["email" as keyof object]) {
        alert("User exist"); 
        return;
      } 
      // return;
    }
    let arrLength: number = usersInLocalStorage.length;
    let lastUser = usersInLocalStorage[arrLength - 1];
    if (arrLength === 0) {
      user["id"] += 1;
    } else if (arrLength >= 1) {
      user["id"] = lastUser["id" as keyof object] + 1;

    }
    usersInLocalStorage.push(user);
    this.databaseService.set(`Users`, usersInLocalStorage);
    return;
  }
}
