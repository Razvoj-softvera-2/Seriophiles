import {Injectable} from '@angular/core';
import {TvShow} from "../models/tvShow";
import {Genre} from "../models/genres.enum";

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private _tvShows: TvShow[];
  constructor() {
    this._tvShows = [
      {"id": 0, "name": 'Breaking Bad', "startDate": 2008, "endDate": 2013, "comments":[] , "genre": Genre.DRAMA , "numberOfReviews": 0 ,"description": `A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.`},
      {"id": 1, "name": 'Better Call Saul', "startDate": 2015, "comments":[], "genre": Genre.DRAMA, "numberOfReviews": 0, "description":''},
      {"id": 2, "name": 'Money Heist', "startDate": 2017,"endDate": 2021, "comments": [], "genre": Genre.ACTION, "numberOfReviews": 0, "description": `An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.`},
      {"id": 3, "name": 'Juzni Vetar', "startDate": 2019, "comments":[], "genre": Genre.ACTION, "numberOfReviews": 0, "description":`Petar Maras continues his expansion in criminal underworld while saving his family.`},
      {"id": 4, "name": 'The Last Dance', "startDate": 2020, "endDate": 2020, "comments":[], "genre": Genre.SPORTS, "numberOfReviews": 0, "description":`Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.`},
    ]
  }


  get tvShows(): TvShow[] {
    return this._tvShows;
  }



}
