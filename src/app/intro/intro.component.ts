import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ServiceService } from '../service.service';
import { fromLeftTriger } from './animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [ fromLeftTriger ]
})
export class IntroComponent implements OnInit, OnDestroy {
  secToDraw: number;
  Subsc: Subscription;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.secToDraw = this.service.getSecToDraw();
    console.log(`secToDraw = ${this.secToDraw}`);
    var second = Observable.interval(1000).take(2);
    this.Subsc = second.subscribe(
      (second: number) => {
        console.log(second);
      });
  }
  ngOnDestroy() {
    this.Subsc.unsubscribe();
  }
}
