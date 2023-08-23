import { Component } from '@angular/core';
import {IPost} from "./domain/models/IPost";
import {IPostComment} from "./domain/models/IPostComment";
import {IPoll} from "./domain/models/IPoll";
import {IPollOption} from "./domain/models/IPollOption";
import {PostFacadeService} from "./domain/application-services/post/post-facade.service";
import {PollFacadeService} from "./domain/application-services/poll/poll-facade.service";

@Component({
  selector: 'app-fan-room',
  templateUrl: './fan-room.component.html',
  styleUrls: ['./fan-room.component.css']
})
export class FanRoomComponent {

  public posts: IPost[] = [];
  public postComments: IPostComment[] = [];
  public polls: IPoll[] = [];
  public pollOptions: IPollOption[] = [];
  constructor(private postService: PostFacadeService, private pollService: PollFacadeService) {
    this.postService.getAllPosts().subscribe((result) => {
      this.posts = result;
    });

    this.pollService.getAllPolls().subscribe((result) => {
      this.polls = result;
    })
  }

  public getPostComments(postId: number): IPostComment[] {
    this.postService.getCommentsForPost(postId).subscribe((result)=> {
      this.postComments = result;
    });

    return this.postComments;
  }

  public getOptionsForPoll(pollId: number): IPollOption[] {
    this.pollService.getOptionsForPoll(pollId).subscribe((result) => {
      this.pollOptions = result;
    });

    return this.pollOptions;
  }


}
