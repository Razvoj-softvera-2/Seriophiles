import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsByGenreRoutingModule } from './tv-shows-by-genre-routing.module';
import { TvShowsByGenreComponent } from './tv-shows-by-genre.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TvShowsByGenreComponent
  ],
    imports: [
        CommonModule,
        TvShowsByGenreRoutingModule,
        MatCardModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
      TvShowFacadeService
    ]
})
export class TvShowsByGenreModule { }
