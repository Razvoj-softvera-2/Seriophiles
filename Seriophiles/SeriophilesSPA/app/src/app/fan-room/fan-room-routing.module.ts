import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanRoomComponent } from './fan-room.component';
import {PollListComponent} from "./poll-list/poll-list.component";
import {PostListComponent} from "./post-list/post-list.component";

import {PostComponent} from "./post/post.component";
import {PollComponent} from "./poll/poll.component";

const routes: Routes = [
  { path: '', component: FanRoomComponent },
  { path: 'polls', component: PollListComponent },
  { path: 'polls/:id', component: PollComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanRoomRoutingModule { }
