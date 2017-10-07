import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterModule,
  Routes,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';

@Injectable()

export class UserService implements CanActivate{
  userLoggedIn = false;

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string): boolean {
    if(this.userLoggedIn){
      return true;
    }

    this.router.navigate(['/admin/signin']);
    return false;

  }
}
