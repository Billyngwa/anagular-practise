import { Component } from '@angular/core';
import { TaskLevel } from 'src/app/constants/constants.enum';
import { Itask } from 'src/app/interfaces/task.interface';
import { AddTaskService } from 'src/app/services/services/task-service/add-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent {
  constructor(private addTask:AddTaskService){}
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
  saveTask(){
    this.addTask.addTask(this.task);
    
  }
}
