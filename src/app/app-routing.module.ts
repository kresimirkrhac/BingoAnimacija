import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './draw/draw.component';
import { IntroComponent } from './intro/intro.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'draw', component: DrawComponent, data: {animation: 'drawPage'} },
  { path: 'intro', component: IntroComponent, data: {animation: 'introPage'} },
  { path: 'results', component: ResultsComponent, data: {animation: 'resultsPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
