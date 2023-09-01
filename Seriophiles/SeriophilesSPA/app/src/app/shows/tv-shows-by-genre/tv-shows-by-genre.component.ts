import { Component } from '@angular/core';
import { TvShowFacadeService } from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";
import { ITvShow } from "../domain/models/ITvShow";


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
    tvShowFacadeService.getTVShowsByGenre(this.genre).subscribe((result:ITvShow[]) =>{
      this.tvShowsByGenre = [...result];
      console.log(this.tvShowsByGenre);
    });
  }

}
