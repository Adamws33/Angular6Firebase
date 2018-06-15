import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from './services/auth.guard';
import { MessageService } from './services/message.service';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: '/'
  }
];

const firebaseConfig = {
  apiKey: "AIzaSyC7ME4YIA7n_otzFFDCd0uHwqfp6cSOzTo",
  authDomain: "angular6firebase.firebaseapp.com",
  databaseURL: "https://angular6firebase.firebaseio.com",
  projectId: "angular6firebase",
  storageBucket: "angular6firebase.appspot.com",
  messagingSenderId: "447740785812"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
