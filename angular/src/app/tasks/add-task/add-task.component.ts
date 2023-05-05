import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskLevel } from 'src/app/constants/constants.enum';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent {
  constructor(private addTask:AddTaskService, private myrouter:Router){}
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
  taskLevel = ["COMPLETED","PROGRESS","NOT_STARTED"];
  taskDifficulty = ["HIGH","MEDIUM","STANDARD"];
  taskStatus = ["SUCCESS","FAILED","PROGRESS","PAUSED"];
  saveTask(){
    this.addTask.addTask(this.task);
    this.myrouter.navigate([`/view-task/${this.task.userId}`])
  }
}