import { Injectable } from '@angular/core';
import { AppStateService } from "../../../../shared/app-state/app-state-service";
import { JwtService } from "../../../../shared/jwt/jwt.service";
import { UserFacadeService } from "../user-facade.service";
import { AuthenticationService } from "../../infrastructure/authentication/authentication.service";
import {ILoginRequest} from "../../models/ILoginRequest";
import {catchError, map, Observable, of, switchMap, take} from "rxjs";
import {ILoginResponse} from "../../models/ILoginResponse";
import {JwtPayloadKeys} from "../../../../shared/jwt/jwt-payload-keys";
import {IUser} from "../../models/IUser";
import {IAppState} from "../../../../shared/app-state/app-state";
import {IRefreshTokenRequest} from "../../models/IRefreshTokenRequest";
import {IRefreshTokenResponse} from "../../models/IRefreshTokenResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFacadeService {

  constructor(
    private authenticationService: AuthenticationService,
    private appStateService: AppStateService,
    private jwtService: JwtService,
    private userService: UserFacadeService
  ) {}

  public login(UserName: string, Password: string): Observable<boolean> {
    const request: ILoginRequest = { UserName, Password };
    debugger;
    return this.authenticationService.login(request).pipe(
      switchMap((loginResponse: ILoginResponse) => {
        this.appStateService.setAccessToken(loginResponse.accessToken);
        const payload = this.jwtService.parsePayload(loginResponse.accessToken);
        this.appStateService.setUsername(payload[JwtPayloadKeys.Username]);
        this.appStateService.setEmail(payload[JwtPayloadKeys.Email]);
        this.appStateService.setRoles(payload[JwtPayloadKeys.Role]);
        return this.userService.getUserInfo(payload[JwtPayloadKeys.Username]);
      }),
      map((userDetails: IUser) => {
        this.appStateService.setFirstName(userDetails.firstName);
        this.appStateService.setLastName(userDetails.lastName);
        this.appStateService.setUserId(userDetails.id);
        this.appStateService.setEmail(userDetails.email);

        return true;
      }),
      catchError((err) => {
        debugger;
        console.log(err);
        this.appStateService.clearAppState();
        return of(false);
      })
    );
  }

  public refreshToken(): Observable<string | null> {
    return this.appStateService.getAppState().pipe(
      take(1),
      map((appState: IAppState) => {
        const request: IRefreshTokenRequest = { UserName: appState.username as string, RefreshToken: appState.refreshToken as string };
        return request;
      }),
      switchMap((request: IRefreshTokenRequest) => this.authenticationService.refreshToken(request)),
      map((response: IRefreshTokenResponse) => {
        this.appStateService.setAccessToken(response.AccessToken);
        this.appStateService.setRefreshToken(response.RefreshToken);

        return response.AccessToken;
      }),
      catchError((err) => {
        console.log(err);
        this.appStateService.clearAppState();
        return of(null);
      })
    );
  }

}
