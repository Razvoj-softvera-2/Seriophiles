import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanRoomRoutingModule } from './fan-room-routing.module';
import { FanRoomComponent } from './fan-room.component';
import { PostComponent } from './post/post.component';
import {PollListComponent} from "./poll-list/poll-list.component";
import {PostListComponent} from "./post-list/post-list.component";



@NgModule({
  declarations: [
    FanRoomComponent,
    PostComponent,
    PostListComponent,
    PollListComponent
  ],
  imports: [
    CommonModule,
    FanRoomRoutingModule
  ]
})
export class FanRoomModule { }
