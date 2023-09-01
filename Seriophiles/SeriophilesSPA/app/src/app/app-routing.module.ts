import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { UserInfoComponent } from "./identity/user-info/user-info.component";
import { TvShowActorInfoComponent } from "./shows/tv-show-actor-info/tv-show-actor-info.component";


const routes = [
  { path: '', loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule) },
  { path: 'shows', loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule) },
  { path: 'identity', loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule) },
  { path: 'user/profile', component: UserInfoComponent },
  { path: 'actors', component: TvShowActorInfoComponent }
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
