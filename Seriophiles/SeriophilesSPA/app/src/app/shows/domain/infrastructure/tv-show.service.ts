import { Injectable } from '@angular/core';
import { ITvShow } from "../models/tvShow";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


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



}
