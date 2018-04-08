import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { routeStateTrigger } from './animations';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeStateTrigger]
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.service.Init();
    this.changeRoute();
  }

  changeRoute() {
   
      var secToDraw = this.service.getSecToDraw();
      console.log(`secToDraw => ${secToDraw}`);
      if (secToDraw > 195) {
        this.router.navigateByUrl('/draw');
        // setTimeout(() => {this.router.navigateByUrl('/results')},secToDraw-195);
      }
      else if (secToDraw > 150) {
        this.router.navigateByUrl('/results');
        // setTimeout(() => {this.router.navigateByUrl('/intro')},secToDraw-195);
      }
      else {
        this.router.navigateByUrl('/intro');
//        setTimeout(() => {this.router.navigateByUrl('/draw')},secToDraw);
      }
  }

  routeState(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'introPage';
    }
    return routeData['page'];
  }
}
