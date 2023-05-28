import { Injectable } from '@angular/core';
import { IUser } from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url : string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient){}

  public getUser(): Observable<IUser>{
    return this.httpClient.get<IUser>(this.url+"/1");

  }

}
