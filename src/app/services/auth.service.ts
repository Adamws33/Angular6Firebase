import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  ​
  registerUserWithFirebase(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then( authedUserInfo => {
      // console.log('Successfully created user, info is:', authedUserInfo);
      this.router.navigateByUrl('/');
    }).catch( err => {
      console.log('Error creating user, error:', err );
    });
  }
  loginUserToFirebase(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then ( res => {
      // yay logged in
      this.router.navigateByUrl('/');
    }).catch( err => {
      console.log('Error: ', err);
    });
  }
  ​
  }
