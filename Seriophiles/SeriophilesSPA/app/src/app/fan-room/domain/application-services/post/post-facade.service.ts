import { Injectable } from '@angular/core';
import {PostService} from "../../infrastructure/post/post.service";
import {Observable} from "rxjs";
import {IPost} from "../../models/IPost";
import {IPostComment} from "../../models/IPostComment";

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(private postService: PostService) { }

  public getAllPosts(): Observable<IPost[]> {
    return this.postService.getAllPosts();
  }

  public getPost(postId: number): Observable<IPost> {
    return this.postService.getPost(postId);
  }

  public getCommentsForPost(postId: number): Observable<IPostComment[]> {
    return this.postService.getCommentsForPost(postId);
  }

  public addPost(post: IPost): any {
    return this.postService.addPost(post);
  }

  public addCommentOnPost(postComment: IPostComment): any {
    return this.postService.addCommentOnPost(postComment);
  }

}
