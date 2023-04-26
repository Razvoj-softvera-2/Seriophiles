import { Injectable } from '@angular/core';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user : User;
  constructor() {
    this._user = {
      id: Math.ceil(100*Math.random()),
      firstName: 'Petar',
      lastName: 'Petrovic',
      userName: 'petarp97'
    }
  }


  get user(): User {
    return this._user;
  }
}
