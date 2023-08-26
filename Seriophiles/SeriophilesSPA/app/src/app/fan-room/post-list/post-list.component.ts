import { Component } from '@angular/core';
import {IPostComment} from "../domain/models/IPostComment";

import {IPost} from "../domain/models/IPost";

import {PostFacadeService} from "../domain/application-services/post/post-facade.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  public posts: IPost[] = [];
  public postForm : FormGroup;
  constructor(private postService: PostFacadeService, private formBuilder: FormBuilder) {
    this.postService.getAllPosts().subscribe((result) => {
      this.posts = result;
    });

    this.postForm = this.formBuilder.group({
      title: ['',[Validators.minLength(5)]],
      description: ['',[Validators.minLength(5)]],
      spoiler: [true]
    })
  }

  public onSubmitPost(){

    if(this.postForm.controls['title'].invalid){
      window.alert('Comment should have at least 4 characters');
      return ;
    }

    if(this.postForm.controls['description'].invalid){
      window.alert('Description should have at least 4 characters');
      return ;
    }

    const isSpoiler : boolean = this.postForm.get('spoiler')?.value;
    const title = this.postForm.get('title')?.value;
    const description = this.postForm.get('description')?.value;
    const username = 'ste1drag';
    const id = Math.floor(Math.random() * (100000000 + 1));
    const upvotes = 0;
    const downvotes = 0;

    this.postService.addPost({id,username,title,description,isSpoiler,upvotes,downvotes});
  }

}
