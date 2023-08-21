import { Injectable } from '@angular/core';
import { ITvShow } from "../models/tvShow";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IReview} from "../models/review";


@Injectable({
  providedIn: 'root'
})
export class TvShowService {


  private readonly showsUrl : string = "http://localhost:3000/shows";
  private readonly reviewsUrl: string = "http://localhost:3000/reviews";
  constructor(private httpClient: HttpClient) {
  }


  public getTvShows(): Observable<ITvShow[]> {
    return this.httpClient.get<ITvShow[]>(this.showsUrl);
  }

  public getReviewsForTvShow(showId: number): Observable<IReview[]> {
    return this.httpClient.get<IReview[]>(this.reviewsUrl+'?showId='+showId);
  }

  public addReviewForTvShow(reviewRequest: IReview): any {
    return this.httpClient.post<IReview>(this.reviewsUrl,reviewRequest).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      });
  }



}
