import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../adminShared/user.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',

})

export class SigninComponent {
  email: string;
  password: string;
  constructor(private userService: UserService, private router: Router){}

  login() {
    alert('in login');
    this.userService.login(this.email, this.password);
    this.userService.verifyUser();
  }

  signup() {
    this.router.navigate(['/admin/signup']);
  }

  cancel() {
    this.router.navigate(['']);
  }

}
