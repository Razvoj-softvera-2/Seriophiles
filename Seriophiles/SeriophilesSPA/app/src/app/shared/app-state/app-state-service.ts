import { Injectable } from "@angular/core";
import {AppState, IAppState} from "./app-state";
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "../../identity/domain/models/user";

@Injectable({
  providedIn: 'root',
})



export class AppStateService{
  private appState: IAppState = new AppState();
  private appStateSubject: BehaviorSubject<IAppState> = new BehaviorSubject<IAppState>(this.appState);
  private appStateObservable: Observable<IAppState> = this.appStateSubject.asObservable();

  public getAppState(): Observable<IAppState> {
    return this.appStateObservable;
  }

  public setUsername(username: string): void {
    this.appState = this.appState.clone();
    this.appState.user.username = username;
    this.appStateSubject.next(this.appState);
  }

  public setEmail(email: string): void {
    this.appState = this.appState.clone();
    this.appState.user.email = email;
    this.appStateSubject.next(this.appState);
  }

  public setUser(user: IUser): void {
    this.appState = this.appState.clone();
    this.appState.user = user;
    this.appStateSubject.next(this.appState);
  }






}
