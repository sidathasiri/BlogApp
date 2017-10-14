import { Component, OnInit } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BlogAdminService } from '../adminShared/blog-admin.service';
import { Blog } from '../adminShared/blog';

@Component({
    templateUrl: './blog-admin.component.html'
})

export class BlogAdminComponent implements OnInit{
    theUser: any;
    menuChoice: string;
    blogPosts: Blog[];
    formDisplay: boolean = true;
    singlePost: Blog;


    constructor(private userService: UserService, private router: Router, private blogAdminService: BlogAdminService){}

    ngOnInit(){
        this.userService.getLoggedUser().then((user)=>{
            this.theUser = user;
            this.getPosts();
        });
    }

    getPosts(){
        let dbRef = firebase.database().ref('blogPosts/');
        dbRef.once('value')
        .then((snapshot)=>{
            let tmp: string[] = snapshot.val();
            this.blogPosts = Object.keys(tmp).map(key => tmp[key]);
        });
    }

    editPost(post: Blog){
        this.singlePost = post;
        this.formDisplay = false;
    }

    canclEdit(){
        this.formDisplay = true;
    }

    updatePost(single: Blog){
        this.blogAdminService.editPost(single);
        this.formDisplay = true;
    }

    deletePost(single: Blog){
        let verify = confirm('Are you sure want to delete post?');
        if(verify == true){
            this.blogAdminService.removePost(single);
            this.router.navigate(['/admin']);
        }
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

    chooseMenu(menu: string){
        this.menuChoice = menu;
    }




}