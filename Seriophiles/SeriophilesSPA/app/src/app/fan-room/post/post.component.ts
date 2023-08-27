import { Component } from '@angular/core';
import {IPostComment} from "../domain/models/IPostComment";
import {IPost} from "../domain/models/IPost";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostFacadeService} from "../domain/application-services/post/post-facade.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  public post: IPost | undefined;
  public addCommentForm: FormGroup;
  public postComments: IPostComment[] = [];
  constructor(private postService: PostFacadeService, private router: Router, private formBuilder: FormBuilder) {
    this.postService.getAllPosts().subscribe((result)=>{
      const id = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1));
      this.post = result.find(res => res.id === id);
    });

    this.addCommentForm = this.formBuilder.group({
      comment: ['', [Validators.minLength(4)]],
    });

    this.postComments = this.getPostComments( Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1)));

  }

  public getPostComments(postId: number): IPostComment[] {
    let postComments : IPostComment[] = [];
    this.postService.getCommentsForPost(postId).subscribe((result)=> {
      postComments = result;
    });

    return postComments;
  }

  public onAddCommentSubmit(){
    if(this.addCommentForm.invalid){
      alert("Comment should be at least 4 characters long");
      return;
    }

    const comment = this.addCommentForm.get('comment')?.value;
    let postId: number| undefined;
    const id = Math.floor(Math.random() * (100000000 + 1));
    if(this.post){
      postId = this.post.id;
    }
    const username = "stevica";
    const upvotes = 0;
    const downvotes = 0;
    this.postService.addCommentOnPost({id,postId,username,comment,upvotes,downvotes});
  }

}
