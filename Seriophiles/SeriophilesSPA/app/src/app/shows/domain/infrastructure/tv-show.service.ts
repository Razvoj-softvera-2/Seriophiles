import { Injectable } from '@angular/core';
import { ITvShow } from "../models/tvShow";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {IComment} from "../models/comment";


@Injectable({
  providedIn: 'root'
})
export class TvShowService {


  private readonly url : string = "http://localhost:3000/shows";
  constructor(private httpClient: HttpClient) {
  }


  public getTvShows(): Observable<ITvShow[]> {
    return this.httpClient.get<ITvShow[]>(this.url);
  }

  public getReviewsForTvShow(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url);
  }

  public addReviewForTvShow(comment: IComment): any {
    return this.httpClient.post<IComment>(this.url,comment);
  }



}
