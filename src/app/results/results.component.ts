import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { ServiceService } from '../service.service';
import { fadeInTrigger } from './animations';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  animations: [ fadeInTrigger ]
})
export class ResultsComponent implements OnInit, OnDestroy {
  drawQue: number[] = [];
  roundNr: number;
  messages: string[] = [];
  colors: string[] = [];
  secToDrawSub: Subscription;
  drawQueSub: Subscription;
  roundNrSub: Subscription;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    var secToDraw = this.service.getSecToDraw();
    console.log(secToDraw);
    if (secToDraw == -1) {
      this.secToDrawSub = this.service.subSecToDraw.subscribe(
        (sec: number) => { this.startAnim(sec) }
      );
    }
    else
      this.startAnim(secToDraw);
  }

  ngOnDestroy() {
    if (this.secToDrawSub)
      this.secToDrawSub.unsubscribe();
    if (this.roundNrSub)
    	this.roundNrSub.unsubscribe();
    if (this.drawQueSub)
      this.drawQueSub.unsubscribe();
  }

  private startAnim(secToDraw: number) {
    if (secToDraw > 195 || secToDraw < 150) {
      this.service.changeRoute();
    }
    this.roundNr = this.service.getRoundNr();
    if (this.roundNr == -1) {
      this.roundNrSub = this.service.subRoundNr.subscribe((roundNr: number) => {
        this.roundNr = roundNr;
        if (this.drawQue.length == 0)
          this.service.getRoundResults(this.roundNr);
      });
    }
    else if (this.drawQue.length == 0)
      this.service.getRoundResults(this.roundNr);
    this.colors = this.service.getColors();
    this.messages = this.service.getMesagesHr();
    this.drawQue = this.service.getdrawQue();
    if (this.drawQue.length == 0) {
      this.drawQueSub = this.service.subDrawQue.subscribe(
        (drawQue: number[]) => {
          this.drawQue = drawQue; 
          this.changeRoute(secToDraw);           
        }
      );
    }
    else {
      this.changeRoute(secToDraw);
    }
  }

  private changeRoute(secToDraw: number) {
    var secToWait = (secToDraw > 145) ? (secToDraw - 145) : 0;
    setTimeout(() => {
      this.service.changeRoute();
    }, secToWait * 1000);
  }
}
