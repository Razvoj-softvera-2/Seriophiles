import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowActorInfoComponent } from './tv-show-actor-info.component';
import { MatCardModule } from "@angular/material/card";

const routes: Routes = [
  { path: '', component: TvShowActorInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowActorInfoRoutingModule { }
