import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute,private taskService:AddTaskService, private myRoute:Router){}
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
  taskId :number|any;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
     let finalTask =  this.taskService.viewTaskDetails(data["_id"]);
   this.task = finalTask.data

    }) 
  }
    getTaskId(taskiD:string){
       taskiD = this.task["id"];
      console.log(taskiD);
      this.myRoute.navigate([`/task/edit-task/${taskiD}`]);
    }
    deleteTask(){
      this.taskService.delTask(this.task._id,this.task);
      // alert(`task deleted`);
      this.myRoute.navigate(["/tasks/"]);
      
    }
}
