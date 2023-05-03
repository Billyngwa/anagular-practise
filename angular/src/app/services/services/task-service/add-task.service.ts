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
    // id:0
  }
  constructor(private localStore: DatabaseService, private userStore: UsersessionService, private userService: UserService, private sessionstore: SessionstorageService) { }
  addTask(task: Itask) {
    
    task["userId"] = this.userStore.getsession()?.id; 
    // task["id"]:any = new Date().getMilliseconds();

    this.localStore.set("Task", task);
    let someValue = true;
    return someValue;
  }

  delTask(task: Itask) { }
  editTask(task: Itask) { }
  viewTask(task: Itask) { }

}
