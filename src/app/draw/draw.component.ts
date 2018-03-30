import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeInTrigger } from './animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  animations: [ fadeInTrigger ]
})
export class DrawComponent implements OnInit, OnDestroy {
  roundNr: number = 456;
  drawQue: string[] = [];
  ball: string;
  // ballID: number = 0;
  drawFrame: string;
  // drawFrameNr: number = 0;
  explFrame: string;
  // explFrameNr: number = 25;
  drawSub: Subscription;
  explSub: Subscription;
  drawFrameSub: Subscription;
  explFrameSub: Subscription;

  constructor() { }

  ngOnInit() {
    for( var i = 1; i <= 35; i++) {
      if( i <= 9)
        this.drawQue.push(`0${i}`);
      else
        this.drawQue.push(`${i}`)
    }

    this.drawFrame="00";
    this.explFrame="26";
    var drawSec = Observable.interval(2000).take(35);
    var explSec = Observable.interval(2000).take(35);
    this.drawSub = drawSec.subscribe(
      (second: number) => {
        this.ball = this.drawQue[second];
        console.log(`ball ${second+1} ${Date.now() % 100000}` );
        this.draw(second);
      }
    );
    setTimeout(() => {
      var explSec = Observable.interval(2000).take(35);
      this.explSub = explSec.subscribe(
        (second: number) => {
          console.log(`  --> ball ${second+1} ${Date.now() % 100000}` );
          this.explode(second);
        }
      );
    },960);
  }

  ngOnDestroy() {
    this.drawSub.unsubscribe();
    this.explSub.unsubscribe();
    this.drawFrameSub.unsubscribe();
    this.explFrameSub.unsubscribe();
  }

  draw(ballID: number): void {
    var drawFrame = Observable.interval(40).take(14);
    console.log(`draw ${ballID+1} ${Date.now() % 100000}` );
    this.drawFrameSub = drawFrame.subscribe(
      (frame: number) => {
        if ( frame <= 9)
          this.drawFrame = `0${frame}`;
        else
          this.drawFrame = `${frame}`;
        console.log(`frame ${frame} ${this.drawFrame} ${Date.now() % 100000}` );
        }
    );
  }

  explode(ballID: number): void {
    var explFrame = Observable.interval(40).take(26);
    console.log(`  ---> explode ${ballID} ${Date.now() % 100000}`);
    this.explFrameSub = explFrame.subscribe(
      (frame: number) => {
        if ( frame <= 9)
          this.explFrame = `0${frame}`;
        else
          this.explFrame = `${frame}`;
        console.log(`  --> frame ${frame} ${this.explFrame} ${Date.now() % 100000}` );
        }
    );
  }
}
