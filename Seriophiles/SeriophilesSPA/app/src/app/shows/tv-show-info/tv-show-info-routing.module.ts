import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowInfoComponent } from './tv-show-info.component';
import {TvShowReviewsComponent} from "../tv-show-reviews/tv-show-reviews.component";

const routes: Routes = [
  { path: '', component: TvShowInfoComponent },
  { path: 'reviews', component: TvShowReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowInfoRoutingModule { }
