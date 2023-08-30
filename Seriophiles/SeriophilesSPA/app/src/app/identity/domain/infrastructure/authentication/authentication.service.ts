import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILoginRequest} from "../../models/ILoginRequest";
import {ILoginResponse} from "../../models/ILoginResponse";
import {Observable} from "rxjs";
import {IRefreshTokenRequest} from "../../models/IRefreshTokenRequest";
import {IRefreshTokenResponse} from "../../models/IRefreshTokenResponse";
import {ILogoutRequest} from "../../models/ILogoutRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly url: string = 'http://localhost:4000/api/v1/AuthenticationUser';

  constructor(private httpClient: HttpClient) {}

  public login(request: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(`${this.url}/Login`, request);
  }

  public logout(request: ILogoutRequest): Observable<Object> {
    return this.httpClient.post(`${this.url}/Logout`, request);
  }

  public refreshToken(request: IRefreshTokenRequest): Observable<IRefreshTokenResponse> {
    return this.httpClient.post<IRefreshTokenResponse>(`${this.url}/Refresh`, request);
  }
}
