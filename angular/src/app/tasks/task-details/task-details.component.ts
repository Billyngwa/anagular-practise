import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';
import { UpdateLocalstoreService } from 'src/app/services/services/task-service/update-localstore.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute,private taskService:UpdateLocalstoreService, private myRoute:Router){}
  task:Itask={
    taskName:'',
    description: '',
    dueDate: '',
    startDate: '',
    level:"",
    difficulty: "",
    status: "",
    userId: ""
  }
  // task:Itask|any
  taskId :string;
  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      console.log(data);
      
     let finalTask =  this.taskService.getTaskById(data['id']).subscribe(data =>{
      this.task=data["task"]
      console.log(data["task"]);
      
     })
    }) 
  }
    getTaskId(taskiD:string){
       taskiD = this.task["_id"];
      console.log(taskiD);
      this.myRoute.navigate([`/task/edit-task/${taskiD}`]);
    }
    deleteTask(){
      this.taskService.deleteTask(this.task._id).subscribe(data=>{
        console.log('user:',data);
      }
      )
      // alert(`task deleted`);
      // this.myRoute.navigate(["/tasks/"]);
      
    }
}
