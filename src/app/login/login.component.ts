import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
​
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail = '';
  userPassword = '';
​
  constructor(private authService: AuthService) { }
​
  ngOnInit() {
  }
​
loginUser() {
  // ensure the form has been completed correctly.
  if (this.userEmail.trim() === '' || this.userPassword.trim() === '') {
    // If any of the above are true, stop the function.
    return;
  }
  // TO DO: send info to firebase
  this.authService.loginUserToFirebase(this.userEmail, this.userPassword);
}
​
}
