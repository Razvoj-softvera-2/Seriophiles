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

  public getUserInfo(): Observable<IUser> {
    let user: IUser;

    this.userService.getUser().subscribe((result: IUser) => {
      user = result;
      this.appStateService.setEmail(user.email);
      this.appStateService.setUsername(user.username);
    });

    return this.userService.getUser();

  }

  public singupUser(firstName: string, lastName: string, username: string, password: string, email: string, phoneNumber?: string) : Observable<boolean> {
    const request: ISignupRequest = { firstName, lastName, username, password, email, phoneNumber };

    return this.userService.signupUser(request).pipe(
      map(() => {
        return true;
      }),
      catchError((err) => {
        console.log(err);
        return of(false);
      })
    )

  }

}
