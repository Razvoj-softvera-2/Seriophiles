import {Injectable} from "@angular/core";
import {AppState, IAppState} from "./app-state";
import {BehaviorSubject, Observable} from "rxjs";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {LocalStorageKeys} from "../local-storage/local-storage-keys";

@Injectable({
  providedIn: 'root',
})



export class AppStateService{
  private appState: IAppState = new AppState();
  private appStateSubject: BehaviorSubject<IAppState> = new BehaviorSubject<IAppState>(this.appState);
  private appStateObservable: Observable<IAppState> = this.appStateSubject.asObservable();

  constructor(private  localStorageService: LocalStorageService) {
    this
  }

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

  public setAccessToken(accessToken: string): void {
    this.appState = this.appState.clone();
  }

  private restoreFromLocalStorage(): void {
    const appState: IAppState | null = this.localStorageService.get(LocalStorageKeys.AppState);
    if (appState !== null) {
      this.appState = new AppState(
        appState.accessToken,
        appState.refreshToken,
        appState.username,
        appState.email,
        appState.role,
        appState.firstName,
        appState.lastName,
        appState.userId
      );
      this.appStateSubject.next(this.appState);
    }
  }


}
