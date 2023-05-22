import { Component } from '@angular/core';
import { ITvShow } from "../domain/models/tvShow";
import { TvShowFacadeService } from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-tv-shows-by-genre',
  templateUrl: './tv-shows-by-genre.component.html',
  styleUrls: ['./tv-shows-by-genre.component.css']
})
export class TvShowsByGenreComponent {
  public tvShowsByGenre: ITvShow[] = [];
  public genre: string;
  constructor(private tvShowFacadeService: TvShowFacadeService, private router: Router){
    this.genre = router.url.substring(router.url.lastIndexOf('/')+1);
    console.log(this.genre);
    tvShowFacadeService.getAllShows().subscribe((result:ITvShow[]) =>{
      this.tvShowsByGenre = [...result];
      this.tvShowsByGenre=this.tvShowsByGenre.filter((tvShow: ITvShow) => tvShow.genre === this.genre)
    });

  }
}
