import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShowsRoutingModule } from "./shows-routing.module";
import { ShowsComponent } from "./shows.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations:[
    ShowsComponent,
  ],
    imports: [
        CommonModule,
        ShowsRoutingModule,
        FormsModule
    ]
})

export class ShowsModule { }

