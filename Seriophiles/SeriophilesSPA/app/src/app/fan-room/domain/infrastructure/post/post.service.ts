import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../../models/IPost";
import {IPostComment} from "../../models/IPostComment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly postUrl = "http://localhost:3000/posts";
  private readonly postCommentUrl = "http://localhost:3000/discussion";

  constructor(private httpClient: HttpClient) { }

  public getAllPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.postUrl);
  }

  public getPost(postId: number): Observable<IPost> {
    return this.httpClient.get<IPost>(this.postUrl +"?id="+ postId);
  }

  public getCommentsForPost(postId: number): Observable<IPostComment[]> {
    return this.httpClient.get<IPostComment[]>(this.postCommentUrl +"?postId="+ postId);
  }

  public addPost(post: IPost): any {
    return this.httpClient.post<IPost>(this.postUrl,post).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  public addCommentOnPost(postComment: IPostComment): any {
    return this.httpClient.post<IPostComment>(this.postCommentUrl,postComment).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
        return false;
      }
    );
  }


}
