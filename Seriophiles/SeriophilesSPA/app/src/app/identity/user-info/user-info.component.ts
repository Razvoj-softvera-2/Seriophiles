import { Component } from '@angular/core';
import {IAppState} from "../../shared/app-state/app-state";
import {Observable} from "rxjs";
import {AppStateService} from "../../shared/app-state/app-state-service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  public appState$: Observable<IAppState>;

  constructor(private appStateService: AppStateService) {
    this.appState$ = this.appStateService.getAppState();
  }
}
