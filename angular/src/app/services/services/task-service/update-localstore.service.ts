import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environmment/environment';
import { DatabaseService } from '../../localstore/database.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateLocalstoreService { 

  constructor(private http:HttpClient,private localstore:DatabaseService) { }
  
  getTasks():Observable<any>{
    return this.http.get(environment.base_Url + "/task/alltasks");
  }
  createTasks(data: any){
    this.http.post(environment.base_Url + "/task",{data:data}).subscribe(data=>{
      console.log('user:',data);

      
    })
  }

  updateTask(id:string,data:any):Observable<any>{
    return this.http.put(environment.base_Url + `/task/update/${id}`,{data:data});

  }
  deleteTask(id:string):Observable<any>{
    return this.http.delete(environment.base_Url + `/task/deleteTask/${id}`);

 }
  getTaskById(id: string) {
		// let task  = {status:false,data:null};
    return this.http.get(environment.base_Url + `/getTask/details/${id}`);
    
		}
	
}
