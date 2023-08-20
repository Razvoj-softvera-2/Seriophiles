import { Injectable } from '@angular/core';
import { TvShowService } from "../infrastructure/tv-show.service";
import { ITvShow } from "../models/tvShow";
import { Observable } from "rxjs";
import { IReview } from "../models/review";
import {IReviewRequest} from "../models/reviewRequest";


@Injectable({
  providedIn: 'root'
})
export class TvShowFacadeService {

  constructor(private tvShowService: TvShowService) { }

  public getAllShows(): Observable<ITvShow[]> {
    return this.tvShowService.getTvShows();
  }

  public getReviewsFromTvShow(showId: number): Observable<IReview[]> {
    return this.tvShowService.getReviewsForTvShow(showId);
  }

  public addReviewForTvShow(reviewRequest: IReview): any {
    return this.tvShowService.addReviewForTvShow(reviewRequest);
  }


}
