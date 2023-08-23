import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanRoomRoutingModule } from './fan-room-routing.module';
import { FanRoomComponent } from './fan-room.component';


@NgModule({
  declarations: [
    FanRoomComponent
  ],
  imports: [
    CommonModule,
    FanRoomRoutingModule
  ]
})
export class FanRoomModule { }
