import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  constructor(private taskService:AddTaskService, private myRouter:Router){};
  tasks:Itask[]=[];
  task:Itask={
    taskName:'',
    description: '',
    dueDate: '',
    startDate: '',
    level:"",
    difficulty: "",
    status: "",
    userId: "",
    id:0
  }
  taskname:string ="";
taskDescription:string="";

  ngOnInit(): void {
    let arrTasks: any[] = this.taskService.getTasks(this.task["userId" as keyof object]);
   
    this.tasks = [...this.tasks,...arrTasks];
  }
  
  
  searchId(){
    this.taskService.getTasks(this.task["userId" as keyof object]);
  }
}
