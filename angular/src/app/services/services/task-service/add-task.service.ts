import { Injectable } from '@angular/core';
import { DatabaseService } from '../../localstore/database.service';
import { Itask } from 'src/app/interfaces/task.interface';
import { UsersessionService } from '../../sessionstore/usersession.service';
import { UserService } from '../../userService/user.service';
import { findIndex } from 'rxjs';
import { SessionstorageService } from '../../sessionstore/sessionstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {
  task: Itask = {
    taskName: '',
    description: '',
    dueDate: '',
    startDate: '',
    level: "",
    difficulty: "",
    status: "",
    userId: "",
    id:0
  }
 
  constructor(private localStore: DatabaseService, private userStore: UsersessionService, private userService: UserService, private sessionstore: SessionstorageService) { }
  addTask(task: Itask) {
    const taskFromLocalStorage = this.localStore.get("Tasks");
   let taskarr :object[]  = [];
  if(taskFromLocalStorage.status === true){
    taskarr = taskFromLocalStorage.data;

  }
    task["userId"] = this.userStore.getsession()?.id; 
    task["id"] = Date.now();

    taskarr.push(task);

    this.localStore.set("Tasks", taskarr);
    let someValue = true;
    return someValue;
  }

  delTask(task: Itask) { }
  editTask(task: Itask) { }
  viewTask(task: Itask) { }

}
