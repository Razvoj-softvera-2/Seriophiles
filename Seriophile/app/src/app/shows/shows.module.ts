import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShowsRoutingModule } from "./shows-routing.module";
import { ShowsComponent } from "./shows.component";
import {IdentityRoutingModule} from "../identity/identity-routing.module";


@NgModule({
  declarations:[
    ShowsComponent
  ],
  imports:[
    CommonModule,
    IdentityRoutingModule
  ]
})

export class ShowsModule { }

