import { Injectable } from '@angular/core';
import { UserService } from "../infrastructure/user.service";
import { IUser } from "../models/IUser";
import { AppStateService } from "../../../shared/app-state/app-state-service";
import {catchError, map, Observable, of} from "rxjs";
import {ISignupRequest} from "../models/ISignupRequest";

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  constructor( private userService: UserService, private appStateService: AppStateService ) {}

  public getUserInfo(username: string): Observable<IUser> {
    return this.userService.getUser(username);
  }

  public signupUser(firstName: string, lastName: string, username: string, password: string, email: string, phoneNumber?: string)  {
    const request: ISignupRequest = { firstName, lastName, username, password, email, phoneNumber };

    return this.userService.signupUser(request);
  }

}
