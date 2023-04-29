import { Injectable } from '@angular/core';
import { DatabaseService } from '../../localstore/database.service';
import { Itask } from 'src/app/interfaces/task.interface';
import { UsersessionService } from '../../sessionstore/usersession.service';
import { UserService } from '../../userService/user.service';
import { findIndex } from 'rxjs';

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
    id: ""
  }
  constructor(private localStore: DatabaseService, private userStore: UsersessionService, private userService: UserService) { }
  addTask(task: Itask) {
    task["userId"] = this.userStore.getsession()?.id; //Here i am setting the userId of the person who made the task and assigning it to the task userId value 
    //  let arrLength: number = usersInLocalStorage.length;
    // let lastUser = usersInLocalStorage[arrLength - 1];
    // if (arrLength === 0) {
    //   user["id"] += 1;
    // } else if (arrLength >= 1) {
    //   user["id"] = lastUser["id" as keyof object] + 1;

    // }
    this.localStore.set("Task", task);
    let someValue = true;

    //at this point, i am about to dive into localstorage to obtain a key called task
    // with this value, i can perform a search which will permit assign this task into the task array in users array

    const gettaskFromLocalStorage = this.localStore.get("Task");
    console.log(gettaskFromLocalStorage);

    let taskFromLocalStorage = gettaskFromLocalStorage.data;// Here taskFromLocalStorage is ann object
    console.log(taskFromLocalStorage);

    let taskid = taskFromLocalStorage["userId"];
    console.log(taskid);

    const getuserfromLocalstorage = this.localStore.get("Users");
    console.log(getuserfromLocalstorage);

    let userfromLocalStorage: object[] = [];
    if (getuserfromLocalstorage.status === true) {

      userfromLocalStorage = getuserfromLocalstorage.data;
    }
    console.log(userfromLocalStorage);

    for (const aUser of userfromLocalStorage) {
      if (aUser["id" as keyof object] === taskid) {
        alert("User ids are same");
        let userIndex = userfromLocalStorage.indexOf(aUser);
        console.log(userIndex);

        //at this point, we have both ids having same value. we need to now carry out our search and assign;
        let taskKeyValue: object[] = aUser["userTasks" as keyof object]; // the return value here is an object of type Itask;
        console.log(typeof taskKeyValue);
        console.log(taskKeyValue);




        console.log(`SUCCESS`);

        return;
      } else {
        alert(`ERROR!! Ids do not match`);
        alert(`Task was not save` + " " + `we are sorry An ERROR occured`);
        return;
      }
      return;
    }

    return someValue;
  }
  delTask(task: Itask) { }
  editTask(task: Itask) { }
  viewTask(task: Itask) { }

}
