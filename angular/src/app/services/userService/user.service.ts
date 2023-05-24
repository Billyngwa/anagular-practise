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
    private firestore : Firestore,
    private authService : AuthenticationServiceService
    ) 
    { }
  bool = new BooleanConstants();
    db = getFirestore();
  dbref = collection(this.db,'Users');
 newDoc:any;
 
// userdata = {
//   name:'billy',
//   password:'ttgm'
// }

// an observable is an invokable function which can be subscribed to
addUser(user: IUser):Observable<any> { // add user function adds a user of type IUser to firestore
  // the function returns an observable. (()) 
  // const docref = doc(this.dbref,'user1');
  return from(addDoc(this.dbref,user)); // the from method converts the setDoc into an observable
}

   async getUser(){
  const docSnap = await getDocs(this.dbref) ;
  docSnap.forEach(doc =>{
    console.log(doc);
    
  })
}


  signIn(user: IUser) {
  //   onSnapshot(this.dbref, docSnap =>{
  //     docSnap.forEach(doc =>{
  //       console.log(doc.data());
        
  //     })
  //   })
  //  this.newDoc = addDoc(this.dbref,this.userdata).then(docRef => {
  //     alert("Document has been added successfully");
  //   })
  this.authService.login(user);
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
   this.authService.signUp(user);
   this.addUser(user);
   this.getUser();

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
