import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nameToDisplay = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // if there is already a user, the AuthState will change from NotAuther -> Yes Authed
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.nameToDisplay = user.email;
      } else {
        console.log('header says no user');
      }
    });
​
  }
​
  ngOnInit() {
  }
  logout() {
    this.afAuth.auth.signOut();
    this.nameToDisplay = '';
    this.router.navigateByUrl('/');
  }
​
}
