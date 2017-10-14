import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Blog } from './blog';

@Injectable()

export class BlogAdminService{
    createPost(post: Blog){
        let storageRef = firebase.storage().ref();
        storageRef.child(`images/${post.imgTitle}`).putString(post.img, 'base64')
        .then((snapshot)=>{
            let url = snapshot.metadata.downloadURLs[0];
            let dbRef = firebase.database().ref('blogPosts/');
            let newPost = dbRef.push();
            newPost.set({
                title: post.title,
                content: post.content,
                imgTitle: post.imgTitle,
                img: url,
                id: newPost.key
            });
        })
        .catch((error)=>{
            alert(error);
        });
    }

    editPost(update: Blog){
        let dbRef = firebase.database().ref('blogPosts/').child(update.id)
        .update({
            title: update.title,
            content: update.content
        });
    }

    removePost(deletePost: Blog){
        let dbRef = firebase.database().ref('blogPosts/').child(deletePost.id).remove();
        let imageRef = firebase.storage().ref().child(`images/${deletePost.imgTitle}`)
        .delete()
        .then(()=>{})
        .catch((error)=>{
            console.log(error);
        });
    }
}
