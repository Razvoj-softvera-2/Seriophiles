import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowInfoComponent } from './tv-show-info.component';

const routes: Routes = [
  { path: '', component: TvShowInfoComponent },
  { path: 'seasons/:id', loadChildren: () => import('../tv-show-season-info/tv-show-season-info.module').then(m => m.TvShowSeasonInfoModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowInfoRoutingModule { }
