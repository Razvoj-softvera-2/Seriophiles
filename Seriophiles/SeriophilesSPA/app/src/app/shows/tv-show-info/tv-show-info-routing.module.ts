import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowInfoComponent } from './tv-show-info.component';

const routes: Routes = [
  { path: '', component: TvShowInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowInfoRoutingModule { }
