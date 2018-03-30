import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './draw/draw.component';
import { IntroComponent } from './intro/intro.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'draw', component: DrawComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
