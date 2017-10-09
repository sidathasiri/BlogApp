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
  errorMsg: string = null;
  constructor(private userService: UserService, private router: Router){}

  login() {
      this.userService.login(this.email, this.password).then(()=>{}).catch((error)=>{this.errorMsg = error.message});
  }

  signup() {
    this.router.navigate(['/admin/signup']);
  }

  cancel() {
    this.router.navigate(['']);
  }

}
