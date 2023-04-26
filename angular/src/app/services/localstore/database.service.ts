import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
  private store = localStorage;

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

}
