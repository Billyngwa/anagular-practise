import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss','../add-task/add-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService:AddTaskService,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(task => {
      
    })
  }
  task:Itask ={
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
    taskLevel = ["COMPLETED","PROGRESS","NOT_STARTED"];
    taskDifficulty = ["HIGH","MEDIUM","STANDARD"];
    taskStatus = ["SUCCESS","FAILED","PROGRESS","PAUSED"];
  
    editTask(){

    }
}
