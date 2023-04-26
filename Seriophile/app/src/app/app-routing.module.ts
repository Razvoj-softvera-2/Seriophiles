import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


const routes = [
  { path: 'user', loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule) },
  { path: 'shows', loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule)},
  { path: '', loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule) }
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
