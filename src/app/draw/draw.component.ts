import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ServiceService } from '../service.service';
import { fadeInTrigger } from './animations';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  animations: [ fadeInTrigger ]
})
export class DrawComponent implements OnInit, OnDestroy {
  roundNr: number;
  drawQue: string[] = [];
  fadeInStat: string[] = [];
  ballDraw: string;
  ballExpl: string;
  drawFrame: string;
  explFrame: string;
  drawSub: Subscription;
  drawFrameSub: Subscription;
  explFrameSub: Subscription;
  drawExpl: string = "draw";
  
  constructor(private service: ServiceService) { }
  
  ngOnInit() {
    const nrBalls = 35;
    this.drawQue = this.service.getdrawQue();
    var secToDraw = this.service.getSecToDraw();
    console.log(secToDraw);  
    this.drawExpl = "explode";
    this.drawFrame = "25";
    this.explFrame="25";
    if (secToDraw <= 2 || secToDraw > 195) {
      if (secToDraw <= 2)
        secToDraw = 300;
      this.roundNr = this.service.getRoundNr();
      var nrBallsToDraw = Math.floor(nrBalls - (299 - secToDraw) / 2);
      var i;
      for ( i = 0; i < nrBalls - nrBallsToDraw; i++)
        this.fadeInStat.push('vis')
      for( ; i < nrBalls; i++)
        this.fadeInStat.push("iv");

      this.ballDraw = this.ballExpl = this.drawQue[0];
      var drawSec = Observable.interval(3000).take(nrBallsToDraw);
      this.drawSub = drawSec.subscribe(
        (second: number) => {
          this.ballDraw = this.drawQue[(nrBalls-nrBallsToDraw)+second];
          console.log(`ball ${(nrBalls-nrBallsToDraw)+second+1} ${Date.now() % 100000}` );
          this.drawExpl = "draw";
          this.drawFrame = "00";
          this.draw();
          setTimeout(() => {
            this.ballExpl = this.ballDraw;
            this.fadeInStat[(nrBalls-nrBallsToDraw)+second] = "vis";
            this.drawExpl = "explode";
            this.drawFrame = "25";
            this.explode();
          }, 2600)
        }
      );
    }
    else {
      this.roundNr = 0;
      this.ballDraw = this.ballExpl = "01";
      for ( i = 0; i < nrBalls; i++)
        this.fadeInStat.push("iv");
    }
  }

  ngOnDestroy() {
    if (this.drawSub)
      this.drawSub.unsubscribe();
    if (this.drawFrameSub)
    this.drawFrameSub.unsubscribe();
    if (this.explFrameSub)
    this.explFrameSub.unsubscribe();
  }

  draw(): void {
    var drawFrame = Observable.interval(40).take(14);
    // console.log(`draw ${Date.now() % 100000}` );
    this.drawFrameSub = drawFrame.subscribe(
      (frame: number) => {
        if ( frame <= 9)
          this.drawFrame = `0${frame}`;
        else
          this.drawFrame = `${frame}`;
        // console.log(`frame ${frame} ${this.drawFrame} ${Date.now() % 100000}` );
        }
    );
  }

  explode(): void {
    var explFrame = Observable.interval(40).take(14);
    // console.log(`  ---> explode ${Date.now() % 100000}`);
    this.explFrameSub = explFrame.subscribe(
      (frame: number) => {
        if (frame <= 5)
          this.explFrame = `0${frame}`;
        else if (frame <= 7)
          this.explFrame = `0${frame + (frame-5)}`;
        else if (frame <= 10)
          this.explFrame = `${frame + (frame-5)}`;
        else if (frame == 11)
          this.explFrame = "18";
        else if (frame == 12)
          this.explFrame = "21";
        else
          this.explFrame = "25";
        // console.log(`  --> frame ${frame} ${this.explFrame} ${Date.now() % 100000}` );
        }
    );
  }
}
