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

  public getUser(username: string): Observable<IUser>{
    return this.httpClient.get<IUser>(`http://localhost:3000/users/${username}`);
  }

  public signupUser(request: ISignupRequest){
    return this.httpClient.post<ISignupRequest>(this.url,request).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  public loginUser(request: ILoginRequest){

  }

}
