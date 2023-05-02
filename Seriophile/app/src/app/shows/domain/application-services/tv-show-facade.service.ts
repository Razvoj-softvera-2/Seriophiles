import { Injectable } from '@angular/core';
import {TvShowService} from "../infrastructure/tv-show.service";
import {TvShow} from "../models/tvShow";

@Injectable({
  providedIn: 'root'
})
export class TvShowFacadeService {

  constructor(private tvShowService: TvShowService) { }

  public getAllShows(): TvShow[] {
    return this.tvShowService.tvShows;
  }


}
