import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../adminShared/user.service';

@Component({
  selector: 'admin-menu',
  templateUrl: './adminMenu.component.html',

})

export class AdminMenuComponent implements OnInit{
  loggedUser = null;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(){
    this.userService.getLoggedUser().then((user)=>{
      this.loggedUser = user;
      console.log("logged user is:");
      console.log(this.loggedUser);
    });
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }


}
