import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppStateService} from "../../../shared/app-state/app-state-service";
import {ISignupRequest} from "../models/ISignupRequest";
import {ILoginRequest} from "../models/ILoginRequest";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url : string = "http://localhost:4000/api/v1/AuthenticationUser/Register";
  constructor(private httpClient: HttpClient, private appStateService: AppStateService){

  }

  public getUser(username: string): Observable<IUser>{

    return this.httpClient.get<IUser>(`http://localhost:4000/api/v1/User/${username}`);

  }

  public signupUser(request: ISignupRequest){
    return this.httpClient.post<ISignupRequest>(this.url,request)
  }

  public loginUser(request: ILoginRequest){

  }

}
