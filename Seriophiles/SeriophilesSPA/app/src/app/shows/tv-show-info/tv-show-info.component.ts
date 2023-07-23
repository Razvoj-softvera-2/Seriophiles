import { Component } from '@angular/core';
import {ITvShow} from "../domain/models/tvShow";
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.css']
})
export class TvShowInfoComponent {
  public tvShow: ITvShow | undefined;

  constructor(private  tvShowFacadeService: TvShowFacadeService, private router: Router) {
    this.tvShowFacadeService.getAllShows().subscribe((result)=>{
      const id = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1));
      this.tvShow = result.find(res => res.id === id);
    });
  }

  protected readonly Object = Object;
}
