import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowSeasonInfoComponent } from './tv-show-season-info.component';
import {TvShowEpisodeInfoComponent} from "../tv-show-episode-info/tv-show-episode-info.component";

const routes: Routes = [
  { path: '', component: TvShowSeasonInfoComponent },
  { path: '/episodes/:id', component: TvShowEpisodeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowSeasonInfoRoutingModule { }
