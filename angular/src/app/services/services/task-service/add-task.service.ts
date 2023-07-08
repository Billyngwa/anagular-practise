import { Injectable } from '@angular/core';
import { DatabaseService } from '../../localstore/database.service';
import { Itask } from 'src/app/interfaces/task.interface';
import { UsersessionService } from '../../sessionstore/usersession.service';
import { UserService } from '../../userService/user.service';
import { findIndex } from 'rxjs';
import { SessionstorageService } from '../../sessionstore/sessionstorage.service';
import { Router } from '@angular/router';

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
		id: 0
	}

	constructor(
		private localStore: DatabaseService,
		private userStore: UsersessionService,
		private userService: UserService,
		private sessionstore: SessionstorageService,
		private route: Router
	) { }

	//this function adds a task to the task array 
	addTask(task: Itask) {
		const taskFromLocalStorage = this.localStore.get("Tasks");
		let taskarr: object[] = [];
		if (taskFromLocalStorage.status === true) {

			
			taskarr = taskFromLocalStorage.data;

		}
		//saving the necessary ids of a particular task
		task["userId"] = this.userStore.getsession()?.id;
		task["id"] = Date.now();
		
		taskarr.push(task);

		this.localStore.set("Tasks", taskarr);
		let someValue = true;
		return someValue;
	}


	//this function is used to get a task based on a userId
	getTasks(userId: number): any {
		const tasksFromLocalStorage = this.localStore.get("Tasks").data;
		userId = this.userStore.getsession()?.id;
		let arrResultant: object[] = [];

		for (const atask of tasksFromLocalStorage) {
			if (userId == null) {
				alert(`Login before creating a task`);
				this.route.navigate([""]);
				return;
			}
			if (userId === atask["userId" as keyof object]) {
				arrResultant.push(atask);
			}
		}
		return arrResultant;
	}

	delTask(id: number,newTask:Itask) {
		// this code is used to find the specific task by getting its index and removing from
		// the array using splice array method
		const tasksFromLocalStorage = this.localStore.get("Tasks").data;
		let taskIndex:number;
		let delTask
		let task  = {status:false,data:null};
		for (let atask of tasksFromLocalStorage) {
			if (id == atask["id"]) {
				task = {
					status:true, data:atask
				}
				taskIndex = tasksFromLocalStorage.indexOf(atask);
				console.log(taskIndex);
				
				 tasksFromLocalStorage.splice(taskIndex, 1);
				//  console.log(tasksFromLocalStorage.splice(0,taskIndex));
				 
				// delTask = tasksFromLocalStorage.splice(taskIndex, 1)
				this.localStore.set('delTask',tasksFromLocalStorage.splice(taskIndex, 1));

				 this.localStore.set("Tasks",tasksFromLocalStorage);
				
			}
		}

		// return 	tasksFromLocalStorage.splice(taskIndex,1);

	}

	editTask(id: number,newTask:Itask) {
		const tasksFromLocalStorage = this.localStore.get("Tasks").data;
		let task  = {status:false,data:null};
		for (let atask of tasksFromLocalStorage) {
			if (id == atask["id"]) {
				task = {
					status:true, data:atask
				}
				let taskIndex: any;
				taskIndex = tasksFromLocalStorage.indexOf(atask);
				tasksFromLocalStorage[taskIndex] = newTask;
				this.localStore.set("Tasks",tasksFromLocalStorage);
				break;
			} 
		}
		return task;
	}
	viewTaskDetails(id: number) {
		const tasksFromLocalStorage = this.localStore.get("Tasks").data;
		let task  = {status:false,data:null};
		for (const atask of tasksFromLocalStorage) {
			if (id == atask["id"]) {
				task = {
					status:true, data:atask
				}
				break;
			} 
		}
		return task;
	}

}
