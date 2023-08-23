import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


const routes = [
  { path: '', loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule) },
  { path: 'shows', loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule) },
  { path: 'identity', loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule) },
  { path: 'fanRoom', loadChildren: () => import('./fan-room/fan-room.module').then(m => m.FanRoomModule) },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
