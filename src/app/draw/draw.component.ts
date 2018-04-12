import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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
  drawExpl = "draw";
  nrBalls = 35;
  
  constructor(private service: ServiceService) { }
  
  ngOnInit() {
    var secToDraw = this.service.getSecToDraw();
    if (secToDraw >= 2 && secToDraw < 195) {
      this.service.changeRoute();
    }
    else {
      if (secToDraw < 2)
        secToDraw = 300;

      this.drawFrame = "25";
      this.explFrame = "25";
      this.drawExpl = "explode";
      this.roundNr = this.service.getRoundNr();
      this.drawQue = this.service.getdrawQue();
      this.ballDraw = this.ballExpl = this.drawQue[0];

      var nrBallsToDraw = Math.floor(this.nrBalls - (299 - secToDraw) / 3);
      this.initAnim(nrBallsToDraw);
      this.drawBals(secToDraw, nrBallsToDraw);
    }
  }

  ngOnDestroy() {
    if (this.drawSub)
      this.drawSub.unsubscribe();
    if (this.drawFrameSub)
      this.drawFrameSub.unsubscribe();
    if (this.explFrameSub)
      this.explFrameSub.unsubscribe();
    this.fadeInStat = [];
  }

  private initAnim(nrBallsToDraw: number) {
    var i = 0;
    for (; i < this.nrBalls - nrBallsToDraw; i++)
      this.fadeInStat.push('vis');
    for (; i < this.nrBalls; i++)
      this.fadeInStat.push("iv");
  }

  private drawBals(secToDraw: number, nrBallsToDraw: number) {
    var drawSec = Observable.interval(2990).take(nrBallsToDraw);
    this.drawSub = drawSec.subscribe((second: number) => {
      this.ballDraw = this.drawQue[(this.nrBalls - nrBallsToDraw) + second];
      // console.log(`ball ${(this.nrBalls - nrBallsToDraw) + second + 1} ${Date.now() % 100000}`);
      this.drawExpl = "draw";
      this.drawFrame = "00";
      this.draw();
      setTimeout(() => {
        this.ballExpl = this.ballDraw;
        this.fadeInStat[(this.nrBalls - nrBallsToDraw) + second] = "vis";
        this.drawExpl = "explode";
        this.drawFrame = "25";
        this.explode();
        if (second == nrBallsToDraw - 1) {
          setTimeout(() => {
            this.service.changeRoute();
          }, 1000);
        }
      }, 2680);
    });
  }

  draw(): void {
    var drawFrame = Observable.interval(40).take(14);
    this.drawFrameSub = drawFrame.subscribe(
      (frame: number) => {
        if ( frame <= 9)
          this.drawFrame = `0${frame}`;
        else
          this.drawFrame = `${frame}`;
      }
    );
  }

  explode(): void {
    var explFrame = Observable.interval(40).take(14);
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
      }
    );
  }
}
