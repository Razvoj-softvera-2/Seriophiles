import { Component } from '@angular/core';
import {Genre} from "./domain/models/genres.enum";
import {ITvShow} from "./domain/models/ITvShow";
import {TvShowFacadeService} from "./domain/application-services/tv-show-facade.service";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {

  public searchString = "";
  public tvShowBySearch : ITvShow[] = [];
  constructor(private tvShowFacadeService: TvShowFacadeService){

  }

  onSearch(): void {
    if (this.searchString) {
      this.tvShowFacadeService.getTvShowByName(this.searchString)
        .subscribe((data) => {
          console.log(data);
          this.tvShowBySearch = [...data];
        });
    }
  }


  protected readonly Object = Object;
  protected readonly Genre = Genre;
}
