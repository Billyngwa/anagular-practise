import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { from } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private auth:Auth) { }

  login(user:IUser){
   return from(signInWithEmailAndPassword(this.auth,user.email,user.password));
  }
  signUp(user:IUser){
    return from(createUserWithEmailAndPassword(this.auth,user.email,user.password));
   }
  logout(){
    return from(this.auth.signOut())
  }
}
