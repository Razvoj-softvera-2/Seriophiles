import { Component } from '@angular/core';
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";
import {IReview} from "../domain/models/review";

@Component({
  selector: 'app-tv-show-reviews',
  templateUrl: './tv-show-reviews.component.html',
  styleUrls: ['./tv-show-reviews.component.css']
})
export class TvShowReviewsComponent {

  public reviews: IReview[] = [];

  constructor (private tvShowService: TvShowFacadeService, private router: Router){
    const id = Number.parseInt(this.router.url.substring(this.router.url.slice(0,this.router.url.lastIndexOf('/')).lastIndexOf('/')+1));
    this.tvShowService.getReviewsFromTvShow(id).subscribe((result) => {
      this.reviews = result;
    })
  }

}
