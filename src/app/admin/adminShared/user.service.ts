import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterModule,
  Routes,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';
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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    var self = this;
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            self.authUser = user;
            self.userLoggedIn = true;
            resolve(true);
          } else {
            self.authUser = null;
            self.userLoggedIn = false;
            self.router.navigate(['/admin/signin']);
            resolve(false);
          }
      });
  });
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
