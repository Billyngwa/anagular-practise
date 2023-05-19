import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskMainComponent } from './tasks/task-main/task-main.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { ViewTaskComponent } from './tasks/view-task/view-task.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { MainLandingComponent } from './main-landing/main-landing.component';

const routes: Routes = [
  {
    path:"",
    component:MainLandingComponent,
  },
  {
    path:"main",
    component:MainComponent,
  },
  {
    path:"tasks",
    component:TaskMainComponent,
    children:[
      {
        path:"",
        component:TasksListComponent,
      },
    ]
  },
  {
    path:"add-task",
    component:AddTaskComponent
  },
  {
    path:"view-task/:userId",
    component:ViewTaskComponent,
  },
  {
    path:"user/tasks",
    component:ViewTaskComponent,
  },
  {
    path:"task/edit-task/:taskId",
    component:EditTaskComponent
  },
  {
    path:"task/edit-task",
    component:EditTaskComponent
  },
  {
    path:"task-details/:id",
    component:TaskDetailsComponent,
  },
  {
    path:"sign-in",
    component:SignInComponent,
  },
  {
    path:"sign-up",
    component:SignUpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
