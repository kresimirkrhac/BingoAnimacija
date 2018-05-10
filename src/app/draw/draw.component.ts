import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ServiceService } from '../service.service';
import { fadeInTrigger, fadeInTriggerBall } from './animations';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  animations: [ fadeInTrigger, fadeInTriggerBall ]
})
export class DrawComponent implements OnInit, OnDestroy {
  nrBalls = 35;
  roundNr: number;
  index: number;
  drawQue: number[] = [];
  fadeInStat: string[] = [];
  fadeInStatc: boolean[] = [];
  messages: string[] = [];
  colors: string[] = [];
  colorsc: string[] = [];
  colorsci: string[] = [];
  // ballDraw: string;
  // ballExpl: string;
  // drawFrame: string;
  // explFrame: string;
  // drawExpl = "draw";
  drawSub: Subscription;
  drawFrameSub: Subscription;
  explFrameSub: Subscription;
  secToDrawSub: Subscription;
  roundNrSub: Subscription;
  drawQueSub: Subscription;
  
  constructor(private service: ServiceService) { }
  
  ngOnInit() {
    var secToDraw = this.service.getSecToDraw();
    console.log(`secToDraw ${secToDraw} => ${new Date()}`);
    if (secToDraw == -1) {
      this.secToDrawSub = this.service.subSecToDraw.subscribe(
        (sec: number) => { this.startAnim(sec) }
      );
    }
    else {
      if (secToDraw <= 2)
        secToDraw = 300;
      this.startAnim(secToDraw);
    }
  }

  ngOnDestroy() {
    if (this.drawSub)
      this.drawSub.unsubscribe();
    if (this.drawFrameSub)
      this.drawFrameSub.unsubscribe();
    if (this.explFrameSub)
      this.explFrameSub.unsubscribe();
    if (this.secToDrawSub)
      this.secToDrawSub.unsubscribe();
    if (this.roundNrSub)
    	this.roundNrSub.unsubscribe();
    if (this.drawQueSub)
      this.drawQueSub.unsubscribe();
    this.fadeInStat = [];
    this.fadeInStatc = [];
    this.colors = [];
    this.colorsc = [];
    this.colorsci = [];
  }

  private startAnim(secToDraw: number) {
    if (secToDraw >= 2 && secToDraw < 195) {
      this.service.changeRoute();
    }
    else {
      this.roundNr = this.service.getRoundNr();
      this.roundNrSub = this.service.subRoundNr.subscribe(
        (roundNr: number) => { 
          this.roundNr = roundNr;
          if (this.drawQue.length == 0)
            this.service.getRoundResults(this.roundNr);
        }
      );
      // this.drawFrame = "25";
      // this.explFrame = "25";
      // this.drawExpl = "explode";
      this.colors = this.service.getColors();
      for (let col of this.colors) {
        this.colorsc.push(`${col}c`);
        this.colorsci.push(`${col}ci`);
        console.log(`${this.colorsc} -> ${this.colorsci} `);
      }
      this.messages = this.service.getMesagesHr();
      this.drawQue = this.service.getdrawQue();
      if (this.drawQue.length == 0) {
        this.drawQueSub = this.service.subDrawQue.subscribe(
          (drawQue: number[]) => {
            this.drawQue = drawQue; 
            this.startDraw(secToDraw);           
          }
        );
      }
      else {
        this.startDraw(secToDraw);
      }
    }
  }

  private startDraw(secToDraw: number) {
    // this.ballDraw = this.ballExpl = this.drawQue[0];
    var nrBallsToDraw = Math.floor(this.nrBalls - (299 - secToDraw) / 3);
    this.initAnim(nrBallsToDraw);
    this.drawBals(secToDraw, nrBallsToDraw);
  }

  private initAnim(nrBallsToDraw: number) {
    var i = 0;
    for (; i < this.nrBalls - nrBallsToDraw; i++) {
      this.fadeInStat.push('vis');
      this.fadeInStatc.push(false);
    }
    for (; i < this.nrBalls; i++) {
      this.fadeInStat.push("iv");
      this.fadeInStatc.push(false);
    }
  }

  private drawBals(secToDraw: number, nrBallsToDraw: number) {
    var drawSec = Observable.interval(2990).take(nrBallsToDraw);
    this.drawSub = drawSec.subscribe((second: number) => {
      this.index = (this.nrBalls - nrBallsToDraw) + second;
      if (this.index > 0)
        this.fadeInStatc[this.index-1] = false;
      this.fadeInStatc[this.index] = true;
      console.log(` fadeInStatc0 = ${this.fadeInStatc[0]}, fadeInStatc1 = ${this.fadeInStatc[1]}`);
      // this.ballDraw = this.drawQue[(this.nrBalls - nrBallsToDraw) + second];
      // console.log(`ball ${(this.nrBalls - nrBallsToDraw) + second + 1} ${Date.now() % 100000}`);
      // this.drawExpl = "draw";
      // this.drawFrame = "00";
      // this.draw();
      setTimeout(() => {
        // this.ballExpl = this.ballDraw;
        this.fadeInStat[this.index/*(this.nrBalls - nrBallsToDraw) + second*/] = "vis";
        // this.drawExpl = "explode";
        // this.drawFrame = "25";
        // this.explode();
        if (second == nrBallsToDraw - 1) {
          setTimeout(() => {
            this.service.changeRoute("results");
          }, 1000);
        }
      }, 2680);
    });
  }

  // draw(): void {
  //   var drawFrame = Observable.interval(40).take(14);
  //   this.drawFrameSub = drawFrame.subscribe(
  //     (frame: number) => {
  //       if ( frame <= 9)
  //         this.drawFrame = `0${frame}`;
  //       else
  //         this.drawFrame = `${frame}`;
  //     }
  //   );
  // }

  // explode(): void {
  //   var explFrame = Observable.interval(40).take(14);
  //   this.explFrameSub = explFrame.subscribe(
  //     (frame: number) => {
  //       if (frame <= 5)
  //         this.explFrame = `0${frame}`;
  //       else if (frame <= 7)
  //         this.explFrame = `0${frame + (frame-5)}`;
  //       else if (frame <= 10)
  //         this.explFrame = `${frame + (frame-5)}`;
  //       else if (frame == 11)
  //         this.explFrame = "18";
  //       else if (frame == 12)
  //         this.explFrame = "21";
  //       else
  //         this.explFrame = "25";
  //     }
  //   );
  // }
}
