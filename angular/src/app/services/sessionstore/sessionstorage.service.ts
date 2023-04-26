import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionstorageService {

  constructor() { }
  private store = sessionStorage;

  set(key: string, data: any) {
    try {
      this.store.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  get(key: string) {
    try {
      const response = JSON.parse(this.store.getItem(key) ?? '');
      return {
        status: true,
        data: response
      }
    } catch (error) {
      return {
        status: false,
        data: null
      }
    }
  }
  del(key: string){
    try {
      this.store.removeItem(key);
      const response = {status:true,data:null}
      return response;
    } catch (error) {
      return{status:true,data:null}
    }
  }
  clear(){
    try {
      this.store.clear();
      const response = {status:true,data:null}
      return response;
    } catch (error) {
      return{status:true,data:null}
    }
  }
}
