import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../adminShared/user.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',

})

export class SignupComponent {
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;

  constructor(private userService: UserService, private router: Router){}

  signup(){
    if(this.password1 != this.password2){
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.userService.register(this.email, this.password1)
      this.userService.verifyUser();
    }
  }

  cancel(){
    this.router.navigate(['/admin/signin']);
  }
}
