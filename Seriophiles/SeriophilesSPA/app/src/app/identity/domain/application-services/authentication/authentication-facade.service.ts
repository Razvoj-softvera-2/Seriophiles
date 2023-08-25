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

  public login(username: string, password: string): Observable<boolean> {
    const request: ILoginRequest = { loginName: username, password: password };

    return this.authenticationService.login(request).pipe(
      switchMap((loginResponse: ILoginResponse) => {
        this.appStateService.setAccessToken(loginResponse.accessToken);

        const payload = this.jwtService.parsePayload(loginResponse.accessToken);
        this.appStateService.setUsername(payload[JwtPayloadKeys.Username]);
        this.appStateService.setEmail(payload[JwtPayloadKeys.Email]);
        this.appStateService.setRoles(payload[JwtPayloadKeys.Role]);

        return this.userService.getUserInfo();
      }),
      map((userDetails: IUser) => {
        this.appStateService.setFirstName(userDetails.firstName);
        this.appStateService.setLastName(userDetails.lastName);
        this.appStateService.setUserId(userDetails.id);

        return true;
      }),
      catchError((err) => {
        console.log(err);
        this.appStateService.clearAppState();
        return of(false);
      })
    );
  }

}
