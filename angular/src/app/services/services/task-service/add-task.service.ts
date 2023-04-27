import { Injectable } from '@angular/core';
import { DatabaseService } from '../../localstore/database.service';
import { Itask } from 'src/app/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {
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
  constructor(private localStore : DatabaseService) { }
  addTask(task:Itask){
    
    this.localStore.set("Task",task);
    let someValue = true
    return someValue;
  }
  delTask(task:Itask){}
  editTask(task:Itask){}
  viewTask(task:Itask){}
  
}
