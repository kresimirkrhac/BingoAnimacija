import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeStateTrigger]
})
export class AppComponent {

  routeState(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'introPage';
    }
    return routeData['page'];
  }
}
