import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IAppState} from "../shared/app-state/app-state";
import {AppStateService} from "../shared/app-state/app-state-service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  public appState$: Observable<IAppState>;


  constructor(private appStateService: AppStateService) {
    this.appState$ = this.appStateService.getAppState();
  }
  ngOnInit(): void {}
  public  userLoggedIn(appState: IAppState): boolean {
    return !this.userLoggedOut(appState);
  }

  public userLoggedOut(appState: IAppState): boolean {
    const bool = appState.isEmpty();
    return bool;
  }


}
