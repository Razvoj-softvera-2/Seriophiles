import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private readonly SINGUP_URL = '/identity/singup';
  private  readonly LOGIN_URL = '/identity/login';
  constructor(public router: Router) {
  }

  isOutsideMainPage() : boolean {
    return this.router.url ===  this.SINGUP_URL || this.router.url === this.LOGIN_URL;
  }
}
