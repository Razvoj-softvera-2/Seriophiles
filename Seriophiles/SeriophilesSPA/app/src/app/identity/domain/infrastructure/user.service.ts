import { Injectable } from '@angular/core';
import { IUser } from "../models/IUser";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, switchMap, take} from "rxjs";
import {ISignupRequest} from "../models/ISignupRequest";
import {ILoginRequest} from "../models/ILoginRequest";
import {AppStateService} from "../../../shared/app-state/app-state-service";
import {IAppState} from "../../../shared/app-state/app-state";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url : string = "http://localhost:4000/api/v1/AuthenticationUser/Register";
  constructor(private httpClient: HttpClient, private appStateService: AppStateService){

  }

  public getUser(username: string): Observable<IUser>{
    debugger;
    return this.appStateService.getAppState().pipe(
      take(1),
      switchMap((appState: IAppState) => {
        const accessToken: string | undefined = appState.accessToken;

        const headers: HttpHeaders = new HttpHeaders().append('Authorization',`Bearer ${accessToken}`);

        return this.httpClient.get<IUser>(`http://localhost:4000/api/v1/User/${username}`, { headers });
      })
    );
  }

  public signupUser(request: ISignupRequest){
    return this.httpClient.post<ISignupRequest>(this.url,request)
  }

  public loginUser(request: ILoginRequest){

  }

}
