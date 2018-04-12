import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { routeStateTrigger } from './animations';
import { ServiceService } from './service.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeStateTrigger]
})
export class AppComponent implements OnInit {
  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.init();
    this.service.changeRoute();
  }

  routeState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || 'introPage';
  }
}
