import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {IPoll} from "../../models/IPoll";
import {IPollOption} from "../../models/IPollOption";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private readonly pollUrl = "http://localhost:3000/polls";
  private readonly optionsUrl = "http://localhost:3000/options";

  constructor(private httpClient: HttpClient) {}

  public getAllPolls(): Observable<IPoll[]>{
    return this.httpClient.get<IPoll[]>(this.pollUrl);
  }

  public getOptionsForPoll(pollId: Number): Observable<IPollOption[]> {
    return this.httpClient.get<IPollOption[]>(this.optionsUrl+"?pollId="+pollId);
  }

  public postPoll(poll: IPoll, pollOptions: IPollOption[]): boolean {
    this.httpClient.post<IPoll>(this.pollUrl,poll).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
        return false;
      }
    );

    for (const pollOption of pollOptions){
      this.httpClient.post<IPollOption>(this.optionsUrl,pollOption).subscribe(
        response => {
          console.log('Response:', response);
        },
        error => {
          console.error('Error:', error);
          return false;
        }
      );
    }

    return true;
  }

}
