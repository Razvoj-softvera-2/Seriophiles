import { Injectable } from '@angular/core';
import { TvShowService } from "../infrastructure/tv-show.service";
import { Observable } from "rxjs";
import { ITvShow } from "../models/ITvShow";



@Injectable({
  providedIn: 'root'
})
export class TvShowFacadeService {

  constructor(private tvShowService: TvShowService) { }

  public getAllShows(): Observable<ITvShow[]> {
    return this.tvShowService.getTvShows();
  }

  public getTvShowById(showId: number): Observable<ITvShow> {
    return this.tvShowService.getTvShowById(showId);
  }

  public getTvShowsByYear(year: number): Observable<ITvShow[]> {
    return this.tvShowService.getTvShowsByYear(year);
  }

  public getTVShowsByGenre(genre: string): Observable<ITvShow[]> {
    return this.tvShowService.getTVShowsByGenre(genre);
  }

  public getTvShowByName(name: string): Observable<ITvShow []>{
    return this.tvShowService.getTVShowsByName(name);
  }

}
