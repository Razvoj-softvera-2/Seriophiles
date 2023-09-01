import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowSeasonInfoRoutingModule } from './tv-show-season-info-routing.module';
import { TvShowSeasonInfoComponent } from './tv-show-season-info.component';
import {TvShowEpisodeInfoComponent} from "../tv-show-episode-info/tv-show-episode-info.component";


@NgModule({
  declarations: [
    TvShowSeasonInfoComponent,
    TvShowEpisodeInfoComponent
  ],
  imports: [
    CommonModule,
    TvShowSeasonInfoRoutingModule
  ]
})
export class TvShowSeasonInfoModule { }
