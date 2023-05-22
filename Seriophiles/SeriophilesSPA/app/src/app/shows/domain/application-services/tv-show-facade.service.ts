import { Injectable } from '@angular/core';
import {TvShowService} from "../infrastructure/tv-show.service";
import {ITvShow,} from "../models/tvShow";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TvShowFacadeService {

  constructor(private tvShowService: TvShowService) { }

  public getAllShows(): Observable<ITvShow[]> {
    return this.tvShowService.getTvShows();
  }


}
