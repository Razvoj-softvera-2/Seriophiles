import { Injectable } from '@angular/core';
import { ActorService } from "../infrastructure/actor.service";
import { Observable } from "rxjs";
import { IActor } from "../models/IActor";



@Injectable({
  providedIn: 'root'
})
export class ActorFacadeService {

  constructor(private ActorService: ActorService) { }

  public getActorServiceById(actorId: number): Observable<IActor> {
    return this.ActorService.getActor(actorId);
  }

  public getActorById(showId: number): Observable<IActor> {
    return this.ActorService.getActor(showId);
  }

}
