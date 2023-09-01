import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsByGenreComponent } from './tv-shows-by-genre.component';

const routes: Routes = [
  { path: '', component: TvShowsByGenreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowsByGenreRoutingModule { }
