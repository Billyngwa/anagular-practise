import { Injectable } from '@angular/core';
import { DatabaseService } from '../localstore/database.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { BooleanConstants } from 'src/app/constants/booleanconstants.enum';
import { SessionstorageService } from '../sessionstore/sessionstorage.service';
DatabaseService
BooleanConstants
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private databaseService: DatabaseService, private session: SessionstorageService) { }
  bool = new BooleanConstants();

  signIn(user: IUser) {
    const getUsersInLocalStorage = this.databaseService.get("Users");
    let loginStatus;
    for (const userObject of getUsersInLocalStorage.data) {
      if (user["email"] === userObject["email"] && user["password"] === userObject["password"]) {
        alert(`${userObject["name"]} logged in with success`);
        window.location.replace("");
        return;
      }
      else {
        continue;
      }
      return;
    }
    alert(`password or email do not match`);
  }
  signUp(user: IUser) {
    const getUsersInLocalStorage = this.databaseService.get("Users");
    let usersInLocalStorage: Object[] = [];
    if (getUsersInLocalStorage.status === true) {

      usersInLocalStorage = getUsersInLocalStorage.data;
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
      // else {

      // }
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
  // this method gets the userTask key from the user object and returns an array of objects.
  //secondly the return value of this method is used by getUserTask() method
  // getUserTaskKey(): object {
  //   let taskKeyValue
  //   const GetUsersInLocalStorage = this.databaseService.get("Users"); //this line of code returns an object with status and data keys. data is the property we need while status is just a boolean
  //   let UsersInLocalStorageArray :object[] = []
  //   if (GetUsersInLocalStorage.status == true) {
  //     UsersInLocalStorageArray = GetUsersInLocalStorage.data;

  //   }
  //   for (const aUser of UsersInLocalStorageArray) {
  //     taskKeyValue = aUser["userTasks" as keyof object]; // the return value here is an object of type Itask;
  //     console.log(taskKeyValue);
  //   }

  //   return {
  //     key:'key',
  //     data:taskKeyValue
  //   };
  // }

  // getUserTask() {//we want to try to push a new task into users array
  //   let taskArray : object[]=[];
  //   let keyValue = this.getUserTaskKey();
  //    if(keyValue["key" as keyof object] === "key"){
  //     taskArray = keyValue["data" as keyof object]; // here we are pushing the existing tasks into an array
  //    }else{
  //     return;
  //    }

  //   console.log(keyValue);
  //   return {
  //     status:"SUCCESS",
  //     data:taskArray
  //   }

  // }
}
