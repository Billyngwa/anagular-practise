import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss','../add-task/add-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService:AddTaskService,private activeRoute:ActivatedRoute,private myRoute:Router){}
  task:Itask ={
    taskName:'',
    description: '',
    dueDate: '',
    startDate: '',
    level:"",
    difficulty: "",
    status: "",
    userId: ""
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      let finalTask =  this.taskService.viewTaskDetails(data["taskId"]);
      this.task = finalTask.data
    })
  }
  
    taskLevel = ["COMPLETED","PROGRESS","NOT_STARTED"];
    taskDifficulty = ["HIGH","MEDIUM","STANDARD"];
    taskStatus = ["SUCCESS","FAILED","PROGRESS","PAUSED"];
  
    editTask(){
      this.taskService.editTask(this.task._id,this.task);
      alert(`Saved successfully`);
      this.myRoute.navigate(['/tasks/']);
    }
}
