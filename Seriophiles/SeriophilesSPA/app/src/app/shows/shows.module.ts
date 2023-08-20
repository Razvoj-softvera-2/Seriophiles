import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShowsRoutingModule } from "./shows-routing.module";
import { ShowsComponent } from "./shows.component";
import { TvShowReviewsComponent } from './tv-show-reviews/tv-show-reviews.component';


@NgModule({
  declarations:[
    ShowsComponent,
    TvShowReviewsComponent,
  ],
  imports:[
    CommonModule,
    ShowsRoutingModule
  ]
})

export class ShowsModule { }

