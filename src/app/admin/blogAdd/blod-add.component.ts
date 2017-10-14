import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAdminService } from '../adminShared/blog-admin.service';
import { Blog } from '../adminShared/blog';

@Component({
    selector: 'blog-add',
    templateUrl: './blog-add.component.html'
})

export class BlogAddComponent {
    imgTitle: string;
    imageSRC: string;
    postTitle: string;
    content: string;
    post: Blog;

    constructor(private router: Router, private blogAdminServie: BlogAdminService){}

    fileLoad($event: any){
        let myReader: FileReader = new FileReader();
        let file: File = $event.target.files[0];

        this.imgTitle = file.name;
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
            this.imageSRC = e.target.result;
        }
    }

    createPost(){
        this.post = new Blog(
            this.postTitle,
            this.content,
            this.imgTitle,
            this.imageSRC.substring(23)
        );

        this.blogAdminServie.createPost(this.post);
        this.router.navigate(['/admin']);
    }

    cancel(){
        this.router.navigate(['/admin']);
    }
}