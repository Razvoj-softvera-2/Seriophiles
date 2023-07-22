import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from "./shows.component";

const routes: Routes = [
  { path:'', component: ShowsComponent },
  { path: ':genre', loadChildren: () => import('./tv-shows-by-genre/tv-shows-by-genre.module').then(m => m.TvShowsByGenreModule) },
  { path: ':id', loadChildren: () => import('./tv-show-info/tv-show-info.module').then(m => m.TvShowInfoModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
