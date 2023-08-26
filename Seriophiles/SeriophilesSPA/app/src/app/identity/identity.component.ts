import { Component } from '@angular/core';
import  { IUser } from "./domain/models/IUser";
import { UserFacadeService } from "./domain/application-services/user-facade.service";

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent {
  public user: IUser | null = null;
  constructor(private userFacadeService: UserFacadeService) {

  }
}
