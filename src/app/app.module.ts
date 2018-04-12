import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { DrawComponent } from './draw/draw.component';
import { ResultsComponent } from './results/results.component';
import { IntroComponent } from './intro/intro.component';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawComponent,
    ResultsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
