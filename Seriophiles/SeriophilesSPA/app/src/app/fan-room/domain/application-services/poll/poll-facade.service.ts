import { Injectable } from '@angular/core';
import {PollService} from "../../infrastructure/poll/poll.service";
import {Observable} from "rxjs";
import {IPoll} from "../../models/IPoll";
import {IPollOption} from "../../models/IPollOption";

@Injectable({
  providedIn: 'root'
})
export class PollFacadeService {

  constructor(private pollService: PollService) { }

  public getAllPolls(): Observable<IPoll[]>{
    return this.pollService.getAllPolls();
  }

  public getOptionsForPoll(pollId: Number): Observable<IPollOption[]> {
    return this.pollService.getOptionsForPoll(pollId);
  }

  public postPoll(poll: IPoll, pollOptions: IPollOption[]): boolean {
    return this.pollService.postPoll(poll,pollOptions);
  }
}
