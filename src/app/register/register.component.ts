import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUserEmail = '';
  newUserPassword = '';
  newUserPasswordConfirm = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
    ​
       if (
         this.newUserEmail.trim() === '' ||
         this.newUserPassword.trim() === '' ||
         this.newUserPasswordConfirm.trim() === '' ||
         this.newUserPassword.trim() !== this.newUserPasswordConfirm.trim()
       ) {
         return;
       }
       this.authService.registerUserWithFirebase( this.newUserEmail.trim(), this.newUserPassword.trim() );
      }

}
