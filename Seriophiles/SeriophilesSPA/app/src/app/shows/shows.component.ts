import { Component } from '@angular/core';
import {Genre} from "./domain/models/genres.enum";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {
  constructor(){

  }


  protected readonly Object = Object;
  protected readonly Genre = Genre;
}
