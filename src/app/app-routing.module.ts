import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawComponent } from './draw/draw.component';
import { IntroComponent } from './intro/intro.component';
import { ResultsComponent } from './results/results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'draw', component: DrawComponent, data: {animation: {page: 'drawPage'}} },
  { path: 'intro', component: IntroComponent, data: {animation: {page: 'introPage'}} },
  { path: 'results', component: ResultsComponent, data: {animation: {page: 'resultsPage'}} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
