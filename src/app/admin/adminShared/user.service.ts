import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterModule,
  Routes,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';
// let firebase = require('firebase');
import * as firebase from 'firebase';

@Injectable()

export class UserService implements CanActivate{
  userLoggedIn = false;
  loggedInUser: string;
  authUser: any

  constructor(private router: Router) {
    firebase.initializeApp({
      apiKey: 'AIzaSyC_Wj_Qm6anehLW9ILmSbSuhgFWSuXxh4A',
      authDomain: 'blogapp-56dc8.firebaseapp.com',
      databaseURL: 'https://blogapp-56dc8.firebaseio.com',
      projectId: 'blogapp-56dc8',
      storageBucket: 'blogapp-56dc8.appspot.com',
      messagingSenderId: '116262975286'
    });
  }

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

  register(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user)=>{
      this.authUser = user;
      this.verifyUser();
    })
    .catch(function (error) {
        throw error;
      });
  }

  verifyUser() {
    this.authUser = firebase.auth().currentUser;
    if(this.authUser) {
      this.loggedInUser = this.authUser.email;
      this.userLoggedIn = true;
      this.router.navigate(['/admin']);
    }
  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user)=>{
      console.log(user);
      this.authUser = user;
      this.verifyUser();
      return user;
    })
    .catch((error)=>{
        throw error;
    });
  }

  logout() {
    this.userLoggedIn = false;
    firebase.auth().signOut()
      .then(function () {
        alert('logged out!');
      }, function (error) {
        alert('Unable to logout!');
      });
  }
}
