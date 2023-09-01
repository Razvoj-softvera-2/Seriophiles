import { Component } from '@angular/core';
import {ITvShow} from "../shows/domain/models/ITvShow";
import {TvShowFacadeService} from "../shows/domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IAppState} from "../shared/app-state/app-state";
import {AppStateService} from "../shared/app-state/app-state-service";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  public tvShows: ITvShow[] = [];
  public appState$: Observable<IAppState>;

  constructor(private tvShowFacadeService: TvShowFacadeService, private router: Router, private appStateService: AppStateService){
    tvShowFacadeService.getTvShowsByYear(2023).subscribe((result:ITvShow[]) =>{
      this.tvShows = [...result];
      console.log(this.tvShows);
    });
    this.appState$ = this.appStateService.getAppState();
  }
}
