import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';
import { UpdateLocalstoreService } from 'src/app/services/services/task-service/update-localstore.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  constructor(private taskService:UpdateLocalstoreService,private myRouter:Router){}

  // constructor(private taskService:AddTaskService, private myRouter:Router){};
  allTasks:Itask[]=[];
  task:Itask={
    taskName:'',
    description: '',
    dueDate: '',
    startDate: '',
    level:"",
    difficulty: "",
    status: "",
    userId: "",
  }
  taskname:string ="";
taskDescription:string="";
  // allTasks:Array<any>;
   ngOnInit(){
     this.taskService.getTasks().subscribe(data => {
      this.allTasks = data.data;
      console.log("data: ", data);
    })
  }

  // ngOnInit(): void {
  //   let arrTasks:any = this.taskService.getTasks(this.task["userId" as keyof object]);
   
  //   this.tasks = [...this.tasks,...arrTasks];
  // }
  
  
  // searchId(){
  //   this.taskService.delTask(this.task["userId" as keyof object],this.task);
  //   this.myRouter.navigate([`/view-task/:${this.task["id"]}`]);
    
  // }
  viewTaskDetails(taskId:string){
    this.myRouter.navigate([`/task-details/${taskId}`]);
  }
}
