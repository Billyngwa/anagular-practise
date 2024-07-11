import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';
import { UpdateLocalstoreService } from 'src/app/services/services/task-service/update-localstore.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  arrTasks: any;
  constructor(private taskService:UpdateLocalstoreService, private myRouter:Router){};
  tasks:Itask[]=[];
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
  taskname:string ="";
taskDescription:string="";

  ngOnInit(): void {
     this.taskService.getTasks().subscribe(data =>{
       this.arrTasks = data;
     });
   
    this.tasks = [...this.tasks,...this.arrTasks];
  }
  
  
  searchId(){
    // this.taskService.delTask(this.task["userId" as keyof object],this.task);
    // this.myRouter.navigate([`/view-task/:${this.task["id"]}`]);
    
  }
  viewTaskDetails(taskId:string){
    // this.taskService.viewTaskDetails(this.task["userId" as keyof object],this.task)
    this.myRouter.navigate([`/task-details/${taskId}`]);
    console.log(this.task);
    
  }
}
