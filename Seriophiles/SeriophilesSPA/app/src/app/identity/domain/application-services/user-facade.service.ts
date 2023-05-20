import { Injectable } from '@angular/core';
import { UserService } from "../infrastructure/user.service";
import { IUser } from "../models/user";
import { AppStateService } from "../../../shared/app-state/app-state-service";
import {Observable} from "rxjs";

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
}
