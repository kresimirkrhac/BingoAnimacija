import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ServiceService } from '../service.service';
import {  fromLeftAnimTrigger,
          firstMessagesTrigger,
          secondMessagesTrigger,
          imagesTrigger,
          minuteTrigger,
          thirdhMessagesTrigger,
          fourthMessagesTrigger,
          fivethhMessagesTrigger,
          sixthMessagesTrigger,
          seventhMessagesTrigger,
          eighthMessagesTrigger,
          ninthMessagesTrigger,
          tenthMessagesTrigger,
          halfminuteTrigger,
          lastTrigger
        } from './animations';
import { NumberStatistic } from "../models/NumberStatistic";
import { ColorStatistic } from "../models/ColorStatistic";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [ 
    fromLeftAnimTrigger,
    firstMessagesTrigger,
    secondMessagesTrigger,
    imagesTrigger,
    minuteTrigger,
    thirdhMessagesTrigger,
    fourthMessagesTrigger,
    fivethhMessagesTrigger,
    sixthMessagesTrigger,
    seventhMessagesTrigger,
    eighthMessagesTrigger,
    ninthMessagesTrigger,
    tenthMessagesTrigger,
    halfminuteTrigger,
    lastTrigger
   ]
})
export class IntroComponent implements OnInit, OnDestroy {
  secToDraw: number;
  minToShow: number;
  secToShow: string;
  doAct = true;
  roundNr: number;
  imageStat: string[] = [];
  messages: string[] = [];
  header: boolean = false;
  first: boolean = false;
  firstMessages: boolean = false;
  secondMessages: boolean = false;
  images: boolean = false;
  twoMin: boolean = false;
  thirdMessages: boolean = false;
  fourthMessages: boolean = false;
  fivethMessages: boolean = false;
  sixthMessages: boolean = false;
  seventhMessages: boolean = false;
  eighthMessages: boolean = false;
  ninthMessages: boolean = false;
  tenthMessages: boolean = false;
  oneMin: boolean = false;
  halfMin: boolean = false;
  clock: boolean = false;
  last: boolean = false;
  secToDrawSub: Subscription;
  roundNrSub: Subscription;
  numberStatistic1: NumberStatistic[] = [];
  numberStatistic2: NumberStatistic[] = [];
  colorStatistic: ColorStatistic[] = [];
  colors: string[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.colors = this.service.getColors();
    this.secToDraw = this.service.getSecToDraw();
    // console.log(`secToDraw ${this.secToDraw}`);
    if (this.secToDraw == -1) {
      this.secToDrawSub = this.service.subSecToDraw.subscribe(
        (sec: number) => {
          this.secToDraw = sec;
          if (this.secToDraw > 150)
            this.service.changeRoute();
          else {
            this.startAnim();
          }
        }
      );
    }
    else {
      this.startAnim();
    }
  }

  ngOnDestroy() {
    if (this.secToDrawSub)
      this.secToDrawSub.unsubscribe();
    if (this.roundNrSub)
      this.roundNrSub.unsubscribe();
  }

  private startAnim() {
    const drawTime = Date.now() + this.secToDraw * 1000;
    for (var i = 0; i < 35; i++) {
      this.imageStat.push('iv');
    }
    this.messages = this.service.getMesagesHr();
    this.roundNr = this.service.getRoundNr();
    if (this.roundNr == -1)
      this.roundNrSub = this.service.subRoundNr.subscribe((roundNr: number) => { this.roundNr = roundNr; });
    else
      this.roundNr;
    this.intro(drawTime);
  }

  private intro(drawTime: number) {
    var now = Date.now();
    var milisec;
    this.secToDraw = Math.floor((drawTime - now) / 1000);
    milisec = (drawTime - now) % 1000;
    this.minToShow = Math.floor(this.secToDraw / 60);
    this.secToShow = (this.secToDraw % 60) < 10 ? `0${this.secToDraw % 60}` : `${this.secToDraw % 60}`;
    if (this.secToDraw >= 1) {
      this.anim();
      setTimeout(() => {
        this.intro(drawTime);
      },990);
    }
    else if (this.secToDraw < 1) {
      setTimeout(() => {
        this.header = false;
        this.clock = false;
      }, milisec / 2); 
      setTimeout(() => {
        this.service.changeRoute("draw");
      }, milisec > 200 ? milisec - 200 : 0);
    }
  }

  private anim() {
    var i;
    switch(this.secToDraw) {
      case 150:
      case 149:
        if (this.canDoAction() == true) {
          setTimeout(() => {
            this.first = true;
            this.fromLeftIn(i = 0,"fadeIn",6);
            this.firstMessages = true;
          }, 640);
        }
        break;
      case 140:
      case 139:
        if (this.canDoAction() == true) {
          this.first = true;          
          this.fromLeftIn(i = 0,"fadeIn",6);
          this.firstMessages = false;
          setTimeout(() => {
            this.secondMessages = true;
          }, 640);
        }
        break;
      case 127:
      case 126:
        if (this.canDoAction() == true) {
          this.first = true;
          this.fromLeftIn(i = 0,"final",7);
          this.secondMessages = false;
          this.images = true;
        }
        break;
      case 121:
      case 120:
        if (this.canDoAction() == true) {
          this.twoMin = true;
          if (this.images == false) {
            this.first = true;
            this.fromLeftIn(i = 0,"final",7);
            this.images = true
          }
        }
        break;
      case 117:
      case 116:
        if (this.canDoAction() == true) {
          this.twoMin = false;
          if (this.images == false) {
            this.first = true;
            this.fromLeftIn(i = 0,"final",7);
            this.images = true;
          }
        }
        break;
      case 112:
        if (this.images == false) {
          this.first = true;
          this.fromLeftIn(i = 0,"final",7);
          this.images = true
        }
        break;
      case 106:
      case 105:
        if (this.canDoAction() == true) {
          if (this.images == true) {
            this.fromLeftIn(i = 0,"exit",7);
            this.first = false;
            this.images = false;
          }
          this.thirdMessages = true;
        }
        break;
      case 95:
      case 94:
        if (this.canDoAction() == true) {
          this.thirdMessages = false;
          setTimeout(() => {
            this.fourthMessages = true;
          }, 640);        }
        break;
      case 81:
      case 80:
        if (this.canDoAction() == true) {
          this.fourthMessages = false;
          setTimeout(() => {
            this.fivethMessages = true;
          }, 640);
        }
        break;
      case 70:
      case 69:
        if (this.canDoAction() == true) {
          this.fivethMessages = false;
          setTimeout(() => {
            this.sixthMessages = true;
          }, 640);
        }
        this.service.numberStatistic = [];
        this.service.colorStatistic = [];
        break;
      case 63:
      case 62:
        if (this.canDoAction() == true) {
          this.sixthMessages = false;
          setTimeout(() => {
            this.seventhMessages = true;
          }, 640);
        }
        break;
      case 61:
      case 60:
        if (this.canDoAction() == true) {
          this.oneMin = true;
          if (this.seventhMessages != true)
            this.seventhMessages = true;
        }
      break;
      case 57:
      case 56:
        if (this.canDoAction() == true) {
          this.oneMin = false; 
        }
        break;
      case 51:
      case 50:
        if (this.canDoAction() == true) {
          this.seventhMessages = false;
          this.numberStatistic1 = this.service.getBingoNumberStatistic(false);
          this.numberStatistic2 = this.service.getBingoNumberStatistic(true);
          if (this.numberStatistic1.length) {
            setTimeout(() => {
              this.ninthMessages = true;
            }, 640);
          }
          else {
            setTimeout(() => {
              this.eighthMessages = true;
            }, 640);
          }
        }
        break;
      case 38:
      case 37:
        if (this.ninthMessages == true) {
          this.ninthMessages = false;
        }
        this.colorStatistic = this.service.getBingoColorStatistic();
        if (this.colorStatistic.length) {
          if (this.eighthMessages == true) {
            this.eighthMessages = false;
          }
          setTimeout(() => {
            this.tenthMessages = true;
          }, 640);
        }
        else if (this.eighthMessages != true) {
          setTimeout(() => {
            this.eighthMessages = true;
          }, 640);
        }
        break;

      case 31:
      case 30:
        if (this.canDoAction() == true) {
          this.eighthMessages = false; 
          setTimeout(() => {
            this.halfMin = true;
          }, 640);         
        }
        break;
      case 27:
      case 26:
        if (this.canDoAction() == true) {
          this.halfMin = false;
          this.tenthMessages = false;

          if (this.eighthMessages != true ) {
            setTimeout(() => {
              this.eighthMessages = true;
            }, 640);   
          }
        }
        break;        
      case 19:
      case 18:
        if (this.canDoAction() == true) {
          this.last = true;
          if (this.eighthMessages != true ) {
            setTimeout(() => {
              this.eighthMessages = true;
            }, 640);   
          }
        }
        break;
      case 14:
      case 13:
        if (this.canDoAction() == true) {
          this.last = false;
          if (this.eighthMessages != true ) {
            setTimeout(() => {
              this.eighthMessages = true;
            }, 640);   
          }
        }
        break;
      case 12:
        if (this.service.drawQue.length != 0)
          this.service.drawQue = [];
        break;
      case 9:
      case 8:
        if (this.canDoAction() == true) {
          this.eighthMessages = false;
          setTimeout(() => {
            this.clock = true;
          }, 640);
        }
        if (this.service.drawQue.length != 0)
          this.service.drawQue = [];
        break;
    }
  }

  private fromLeftIn(index: number, state: string, count: number) {
    if (state != "exit") {
      setTimeout(() => {
        this.imageStat[index] = state;
        if (index < count - 1)
          this.fromLeftIn(index + 1, state, count);
      }, 200);
    }
    else {
      for (var i = 0; i < count; i++) {
        this.imageStat[i] = state;
      }
    }
  }

  private canDoAction(): boolean {
    var ret = this.doAct;
    this.doAct = false;
    if (this.header == false) {
      setTimeout(() => {
          this.header = true;
      }, 600);
    }
    setTimeout(() => {
      this.doAct = true;
    }, 2020);
    return ret;
  }
}
