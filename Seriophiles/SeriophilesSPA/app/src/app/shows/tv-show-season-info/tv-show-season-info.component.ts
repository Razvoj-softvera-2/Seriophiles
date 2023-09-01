import { Component } from '@angular/core';
import {ITvShow} from "../domain/models/ITvShow";
import {ISeasons} from "../domain/models/ISeasons";
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tv-show-season-info',
  templateUrl: './tv-show-season-info.component.html',
  styleUrls: ['./tv-show-season-info.component.css']
})
export class TvShowSeasonInfoComponent {

  public tvShow: ITvShow | undefined;
  public seasonInfo: ISeasons | undefined;

  constructor(private  tvShowService: TvShowFacadeService, private router: Router) {
    const substr = this.router.url.substring(0,this.router.url.lastIndexOf('/seasons'));
    const id = Number(substr.substring(substr.lastIndexOf('/')+1,));
    this.tvShowService.getTvShowById(id).subscribe((result)=>{
      this.tvShow = result;
    });

    const seasonId = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1));

    this.seasonInfo = this.tvShow?.seasons.find(season => season.id === seasonId);
  }

}
