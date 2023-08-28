import { Injectable } from '@angular/core';
import { AppStateService } from "../../../../shared/app-state/app-state-service";
import { JwtService } from "../../../../shared/jwt/jwt.service";
import { UserFacadeService } from "../user-facade.service";
import { AuthenticationService } from "../../infrastructure/authentication/authentication.service";
import {ILoginRequest} from "../../models/ILoginRequest";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {ILoginResponse} from "../../models/ILoginResponse";
import {JwtPayloadKeys} from "../../../../shared/jwt/jwt-payload-keys";
import {IUser} from "../../models/IUser";

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
        const u = payload[JwtPayloadKeys.Username];
        debugger;
        this.appStateService.setUsername(u);
        debugger;
        this.appStateService.setEmail(payload[JwtPayloadKeys.Email]);
        debugger;
        this.appStateService.setRoles(payload[JwtPayloadKeys.Role]);
        debugger;
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

}
