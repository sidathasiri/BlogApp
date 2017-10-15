import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';
import { Blog } from '../admin/adminShared/blog';

@Component({
    templateUrl: './blogDetails.component.html'
})

export class BlogDetailsComponent implements OnInit{
    
    singlePost: Blog;

    constructor(private router: Router, private route: ActivatedRoute){}
    
    ngOnInit(){

        let postId = this.route.snapshot.params['id'];
        this.getSingle(postId);
    }

    getSingle(id: string){
        let dbRef = firebase.database().ref('blogPosts');
        dbRef.orderByChild('id')
        .equalTo(id)
        .once('value')
        .then((snapshot)=>{
            let tmp = snapshot.val();
            let transform = Object.keys(tmp).map(key => tmp[key]);
            let title = transform[0].title;
            let content = transform[0].content;
            let imgTitle = transform[0].imgTitle;
            let img = transform[0].img;
            this.singlePost = new Blog(title, content, imgTitle, img);
        });

    }

    goBack(){
        this.router.navigate(['']);
    }
}