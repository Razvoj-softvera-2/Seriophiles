import { Component } from '@angular/core';
import {TvShowFacadeService} from "../domain/application-services/tv-show-facade.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ITvShow} from "../domain/models/ITvShow";

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.css']
})
export class TvShowInfoComponent {
  public tvShow: ITvShow | undefined;

  constructor(private  tvShowService: TvShowFacadeService, private router: Router) {
    const id = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/')+1));
    this.tvShowService.getTvShowById(id).subscribe((result)=>{
      this.tvShow = result;
    });
  }

  protected readonly Object = Object;
}
