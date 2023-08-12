import { Injectable } from "@angular/core";
import {AppState, IAppState} from "./app-state";
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "../../identity/domain/models/IUser";

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
    this.appState.username = username;
    this.appStateSubject.next(this.appState);
  }

  public setEmail(email: string): void {
    this.appState = this.appState.clone();
    this.appState.email = email;
    this.appStateSubject.next(this.appState);
  }

  public setUserId(userId: number): void {
    this.appState = this.appState.clone();
    this.appState.userId = userId;
    this.appStateSubject.next(this.appState);
  }






}
