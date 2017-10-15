import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Blog } from '../admin/adminShared/blog';
import { UserService } from '../admin/adminShared/user.service';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  blogPosts: Blog[];

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    let dbRef = firebase.database().ref('blogPosts/');
    dbRef.once('value')
    .then((snapshot)=>{
        let tmp: string[] = snapshot.val();
        this.blogPosts = Object.keys(tmp).map(key => tmp[key]);
        console.log(this.blogPosts[0]);
    });
  }

  choosePost(post: Blog){
   this.router.navigate(['/post', post.id]); 
  }
}
