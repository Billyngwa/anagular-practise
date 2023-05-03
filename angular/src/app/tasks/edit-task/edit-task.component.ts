import { Component } from '@angular/core';
import { Itask } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  constructor(){}
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
      // this.addTask.addTask(this.task);
    }
}
