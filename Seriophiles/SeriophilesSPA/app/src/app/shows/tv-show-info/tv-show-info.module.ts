import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowInfoRoutingModule } from './tv-show-info-routing.module';
import { TvShowInfoComponent } from './tv-show-info.component';
import {ReactiveFormsModule} from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    TvShowInfoComponent
  ],
    imports: [
        CommonModule,
        TvShowInfoRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class TvShowInfoModule { }
