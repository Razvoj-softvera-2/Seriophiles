import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsByGenreRoutingModule } from './tv-shows-by-genre-routing.module';
import { TvShowsByGenreComponent } from './tv-shows-by-genre.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";


@NgModule({
  declarations: [
    TvShowsByGenreComponent
  ],
    imports: [
        CommonModule,
        TvShowsByGenreRoutingModule,
        MatCardModule,
        HttpClientModule
    ],
    providers: [
      TvShowFacadeService
    ]
})
export class TvShowsByGenreModule { }
