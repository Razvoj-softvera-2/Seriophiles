import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IAppState} from "../shared/app-state/app-state";
import {AppStateService} from "../shared/app-state/app-state-service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public appState$: Observable<IAppState>;

  constructor(private appStateService: AppStateService) {
    this.appState$ = this.appStateService.getAppState();
  }

  public userLoggedOut(appState: IAppState): boolean {
    return appState.isEmpty();
  }


}
