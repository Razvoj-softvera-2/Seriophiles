import { Component } from '@angular/core';
import {ITvShow} from "../shows/domain/models/ITvShow";
import {TvShowFacadeService} from "../shows/domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  public tvShows: ITvShow[] = [];

  constructor(private tvShowFacadeService: TvShowFacadeService, private router: Router){
    tvShowFacadeService.getTvShowsByYear(2023).subscribe((result:ITvShow[]) =>{
      this.tvShows = [...result];
      console.log(this.tvShows);
    });
  }
}
