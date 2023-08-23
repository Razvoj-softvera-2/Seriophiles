import { Injectable } from '@angular/core';
import { IUser } from "../models/IUser";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISignupRequest} from "../models/ISignupRequest";
import {ILoginRequest} from "../models/ILoginRequest";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url : string = "https://localhost:4000/api/v1/AuthenticationUser/Register";
  constructor(private httpClient: HttpClient){

  }

  public getUser(): Observable<IUser>{
    return this.httpClient.get<IUser>("http://localhost:3000/users/1");
  }

  public signupUser(request: ISignupRequest){
    return this.httpClient.post<ISignupRequest>(this.url,request)
  }

  public loginUser(request: ILoginRequest){

  }

}
