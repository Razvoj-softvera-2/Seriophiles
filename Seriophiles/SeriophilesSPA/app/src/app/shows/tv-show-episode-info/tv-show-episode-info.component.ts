import { Component } from '@angular/core';
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";
import {ITvShow} from "../domain/models/ITvShow";
import {ISeasons} from "../domain/models/ISeasons";
import {IEpisode} from "../domain/models/IEpisode";

@Component({
  selector: 'app-tv-show-episode-info',
  templateUrl: './tv-show-episode-info.component.html',
  styleUrls: ['./tv-show-episode-info.component.css']
})
export class TvShowEpisodeInfoComponent {

  public tvShow: ITvShow | undefined;
  public seasonInfo: ISeasons | undefined;
  public episodeInfo: IEpisode | undefined;

  constructor(private  tvShowService: TvShowFacadeService, private router: Router) {
    let substr = this.router.url.substring(0,this.router.url.lastIndexOf('/seasons'));
    const id = Number(substr.substring(substr.lastIndexOf('/')+1,));
    this.tvShowService.getTvShowById(id).subscribe((result)=>{
      this.tvShow = result;
    });

    substr = this.router.url.substring(0,this.router.url.lastIndexOf('/episodes'));
    const seasonId = Number(substr.substring(substr.lastIndexOf('/')+1,));
    this.seasonInfo = this.tvShow?.seasons.find(season => season.id === seasonId);

    const episodeId = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1));
    this.episodeInfo = this.seasonInfo?.episodes.find(episode => episode.id === episodeId);

  }
}
