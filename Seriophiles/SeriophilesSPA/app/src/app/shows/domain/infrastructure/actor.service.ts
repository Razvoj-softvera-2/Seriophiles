import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IActor } from "../models/IActor";


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private readonly seriesAPIUrl: string = "http://localhost:8000/api/v1/Actor";
  constructor(private httpClient: HttpClient) {
  }

  public getActor(actorId: number): Observable<IActor> {
    return this.httpClient.get<IActor>(this.seriesAPIUrl + "/" + actorId);
  }

}
