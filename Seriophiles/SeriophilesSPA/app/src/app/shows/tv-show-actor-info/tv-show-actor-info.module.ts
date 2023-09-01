import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowActorInfoRoutingModule } from './tv-show-actor-info-routing.module';
import { TvShowActorInfoComponent } from './tv-show-actor-info.component';
import {ReactiveFormsModule} from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    TvShowActorInfoComponent
  ],
    imports: [
        CommonModule,
        TvShowActorInfoRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class TvShowActorInfoModule { }
