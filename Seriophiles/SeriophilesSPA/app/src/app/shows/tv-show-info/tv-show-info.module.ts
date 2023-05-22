import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowInfoRoutingModule } from './tv-show-info-routing.module';
import { TvShowInfoComponent } from './tv-show-info.component';


@NgModule({
  declarations: [
    TvShowInfoComponent
  ],
  imports: [
    CommonModule,
    TvShowInfoRoutingModule
  ]
})
export class TvShowInfoModule { }
