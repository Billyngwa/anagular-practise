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
		console.log(arrResultant);

		return arrResultant;

	}

	delTask(userId: number, taskId: number) {
		// const tasksFromLocalStorage = this.localStore.get("Tasks").data;
		let obtainedTask = this.getTasks(userId);
		let taskIndex;
		let atask;
		taskIndex = obtainedTask.findIndex((atask: any) => atask["id" as keyof object]);
		atask = obtainedTask[taskIndex];
	}

	editTask(id: number) {
		const tasksFromLocalStorage = this.localStore.get("Tasks").data;
		let task  = {status:false,data:null};
		for (const atask of tasksFromLocalStorage) {
			if (id == atask["id"]) {
				console.log(atask);
				task = {
					status:true, data:atask
				}
				break;
			} 
		}

	}
	viewTaskDetails(id: number) {
		const tasksFromLocalStorage = this.localStore.get("Tasks").data;
		console.log(tasksFromLocalStorage);
		let task  = {status:false,data:null};
		for (const atask of tasksFromLocalStorage) {
			if (id == atask["id"]) {
				console.log(atask);
				task = {
					status:true, data:atask
				}
				break;
			} 
		}
		return task;
	}

}
