import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { DrawComponent } from './draw/draw.component';
import { ResultsComponent } from './results/results.component';
import { IntroComponent } from './intro/intro.component';
import { ServiceService } from './service.service';
import { HttpModule } from '@angular/http';
import { WebSocketService } from '../shared/common/websocket.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [ServiceService, WebSocketService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
