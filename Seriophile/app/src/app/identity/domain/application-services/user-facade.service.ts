import { Injectable } from '@angular/core';
import {UserService} from "../infrastructure/user.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  constructor(private userService:UserService) { }

  public getUserInfo(): User {
    return this.userService.user;
  }
}
