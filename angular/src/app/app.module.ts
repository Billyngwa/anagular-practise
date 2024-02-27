import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TaskMainComponent } from './tasks/task-main/task-main.component';
import { ViewTaskComponent } from './tasks/view-task/view-task.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAnalyticsModule} from '@angular/fire/compat/analytics'
import { environment } from './environmment/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import {initializeApp,provideFirebaseApp} from '@angular/fire/app'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SignUpComponent,
    SignInComponent,
    TasksListComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskMainComponent,
    ViewTaskComponent,
    TaskDetailsComponent,
    MainLandingComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,   
     MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    AngularFirestoreModule,
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
