import { Injectable } from '@angular/core';
import { DatabaseService } from '../localstore/database.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { BooleanConstants } from 'src/app/constants/booleanconstants.enum';
import { SessionstorageService } from '../sessionstore/sessionstorage.service';
import { Route, Router } from '@angular/router';
import { Firestore, collection, doc, getDoc, getDocs, getFirestore, setDoc,addDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import {AngularFireModule} from '@angular/fire/compat'
import { AuthenticationServiceService } from '../authentication-service.service';
DatabaseService
BooleanConstants
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private databaseService: DatabaseService, 
    private myRoute:Router, 
    private session: SessionstorageService,
    ) 
    { }
  
    isLoggedIn():boolean {
      return this.bool.loginStatus;
    }
    isNotLoggedIn():boolean{
      return this.bool.isNotLoggedIn;
    }
  bool = new BooleanConstants();


  signIn(user: IUser) {
    const getUsersInLocalStorage = this.databaseService.get("Users");
    if(getUsersInLocalStorage.data == null){
      alert(`Account Does not exist`);
      return
    }
    for (const userObject of getUsersInLocalStorage.data) {
      if (user["email"] === userObject["email"] && user["password"] === userObject["password"]) {
        alert(`${userObject["name"]} logged in with success`);
        this.isLoggedIn()

        console.log(`login status: ${this.isLoggedIn()}`);
      this.myRoute.navigate(["/main"]);

        return;
      }
      else {
        continue;
      }
    }
    
    alert(`password or email do not match`);
    this.isNotLoggedIn();
    console.log(`login status: ${this.isNotLoggedIn()}`);
    
    return;

  }
  signUp(user: IUser) {
    const getUsersInLocalStorage = this.databaseService.get("Users");
    let usersInLocalStorage: Object[] = [];
    
    if (getUsersInLocalStorage.status === true) {
      usersInLocalStorage = getUsersInLocalStorage.data
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
