import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanRoomComponent } from './fan-room.component';

const routes: Routes = [{ path: '', component: FanRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanRoomRoutingModule { }
