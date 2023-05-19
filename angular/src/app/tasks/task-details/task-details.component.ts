import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute,private taskService:AddTaskService){}

  task:Itask|any
  taskId :number|any;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
console.log(data["id"]);
     let finalTask =  this.taskService.viewTaskDetails(data["id"]);
console.log(finalTask);
   this.task = finalTask.data
  console.log(this.task);

    }) 
  }

}
