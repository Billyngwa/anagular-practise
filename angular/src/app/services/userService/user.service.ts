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

  constructor(private databaseService: DatabaseService, private session : SessionstorageService) { }
   bool = new BooleanConstants();

    signIn(user:IUser){
      const getUsersInLocalStorage = this.databaseService.get("Users");
      let loginStatus;
      for(const userObject of getUsersInLocalStorage.data){
        if(user["email"] === userObject["email"] && user["password"] === userObject["password"]){
          alert(`${userObject["name"]} logged in with success`);
          // loginStatus = this.bool.loginStatus;
          // if(loginStatus){
          //   user.name =  userObject["name"];
          //   this.session.set("loggedUser",user);
          //   console.log(user.name);
          // }
          window.location.replace("");
          return;
        }
        else{
          continue;
        }
        return;
      }
      alert(`password or email do not match`);
    }
    signUp(user:IUser){
      const getUsersInLocalStorage = this.databaseService.get("Users");
      let usersInLocalStorage: Object[] = [];
      if (getUsersInLocalStorage.status === true) {
        
        usersInLocalStorage = getUsersInLocalStorage.data;
        // return usersInLocalStorage ;
      }
        for(const users of usersInLocalStorage){
          if(user.name === users["name" as keyof object]){
            alert("User exist");
            return;
          }
          if(user.email === users["email" as keyof object]){
            alert("User exist");
            return;
          }else{
            
          }
          // return;
        }
      let arrLength:number = usersInLocalStorage.length;
      let lastUser = usersInLocalStorage[arrLength-1];
      if(arrLength === 0){
        user["id"] += 1;
        // return user["id"]
      }else if(arrLength >= 1){
        // let id 
        user["id"] = lastUser["id" as keyof object]+1; 
        // user["id"] = lastUser["id"]++ ;
        // return user["id"]
        // for(const spottedUser of usersInLocalStorage ){
      }
      // else{
      //   alert('No id was set to user')
      // }
      //  const spottedUserEntries = Object.entries(spottedUser)
      //     if(spottedUser["id" as keyof object] === null){
      //       user["id"] = user["id"]++;
      //       console.log(user["id"]);
      //       return user["id"];

      //     }else{
      //       user["id"] = spottedUser["id" as keyof object]++;
      //       console.log(user["id"]);

      //       return user["id"];

      //     }
      //     return;
      // }
      usersInLocalStorage.push(user);
       this.databaseService.set("Users", usersInLocalStorage);
       return;
    }
    logout(){

    }
}
