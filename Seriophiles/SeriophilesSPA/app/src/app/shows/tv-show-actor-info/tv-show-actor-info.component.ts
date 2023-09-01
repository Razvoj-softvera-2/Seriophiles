import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActorFacadeService } from "../domain/application-services/actor-facade.service";
import { IActor } from "../domain/models/IActor";
import { ITvShow } from "../domain/models/ITvShow";
import { TvShowFacadeService } from '../domain/application-services/tv-show-facade.service';

@Component({
  selector: 'app-tv-show-actor-info',
  templateUrl: './tv-show-actor-info.component.html',
  styleUrls: ['./tv-show-actor-info.component.css']
})
export class TvShowActorInfoComponent {
  public actor: IActor | undefined;

  constructor(private ActorService: ActorFacadeService, private router: Router, private TVShowService: TvShowFacadeService) {
    const id = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));

    this.ActorService.getActorById(id).subscribe((result) => {
      result.characters.forEach(character => {
        var id_num = character.show_id;
        this.TVShowService.getTvShowById(id_num).subscribe((r) => {
          character.show_name = r.name;
        });
        this.actor = result;
      });
    });
  }
}
