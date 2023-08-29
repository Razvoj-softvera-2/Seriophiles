import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ITvShow } from "../models/ITvShow";


@Injectable({
  providedIn: 'root'
})
export class TvShowService {


  private readonly showsUrl : string = "http://localhost:3000/shows";
  private readonly reviewsUrl: string = "http://localhost:3000/reviews";
  private readonly seriesAPIUrl: string = "http://localhost:8000/api/v1/TVShow";
  constructor(private httpClient: HttpClient) {
  }


  public getTvShows(): Observable<ITvShow[]> {
    return this.httpClient.get<ITvShow[]>(this.seriesAPIUrl+"/GetAllTVShows");
  }

  public getTvShowById(showId: number): Observable<ITvShow> {
    return this.httpClient.get<ITvShow>(this.seriesAPIUrl+"/TVShow/"+showId);
  }

  public getTvShowsByYear(year: number): Observable<ITvShow[]> {
    return this.httpClient.get<ITvShow[]>(this.seriesAPIUrl+"/GetTVShowsByYear/"+year);
  }

  public getTVShowsByGenre(genre: string): Observable<ITvShow[]> {
    return this.httpClient.get<ITvShow[]>(this.seriesAPIUrl+"/GetTVShowsByGenre/"+genre);
  }



}
