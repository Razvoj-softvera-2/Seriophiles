import { Injectable } from '@angular/core';
import { UserService } from "../infrastructure/user.service";
import { IUser } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  constructor(private userService:UserService) {}

  public getUserInfo():any {
    let user: IUser | undefined = undefined;

    this.userService.getUser().subscribe((result: IUser) => {
      user = result;
    });



    return user;
  }
}
