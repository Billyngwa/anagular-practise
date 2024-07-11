import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';
import { UpdateLocalstoreService } from 'src/app/services/services/task-service/update-localstore.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss','../add-task/add-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  finalTask:Itask = {
    taskName:'',
    description: '',
    dueDate: '',
    startDate: '',
    level:"",
    difficulty: "",
    status: "",
    userId: ""
  };

  constructor(
    private taskService:AddTaskService,
    private activeRoute:ActivatedRoute,
    private myRoute:Router, 
    private updateTask:UpdateLocalstoreService
    ){
      this.activeRoute.params.subscribe(data => {
        console.log("data", data);
        
          this.updateTask.getTaskById(data["taskId"]).subscribe(data=>{
            console.log("data", data["task"]);
            this.finalTask = data["task"]
          });
          
      })
    }

  ngOnInit() {

  }
    taskLevel = ["COMPLETED","PROGRESS","NOT_STARTED"];
    taskDifficulty = ["HIGH","MEDIUM","STANDARD"];
    taskStatus = ["SUCCESS","FAILED","PROGRESS","PAUSED"];
  
   async editTask(){
     await this.updateTask.updateTask(this.finalTask["_id"],this.finalTask).subscribe(data =>{
      console.log("deleted:",data);
     })
      // this.myRoute.navigate(['/tasks/']);
    }
}
