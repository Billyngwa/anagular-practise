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

  // sign(data:any){
  //   this.http.post(environment.base_Url + "/auth/signin",{data:data}).subscribe(data=>{
  //     console.log(data["status" as keyof object]);
  //     if(data["status" as keyof object] === true){
  //       this.router.navigate(["/dashboard"]);
  //     }
  //   })
  // }
}
