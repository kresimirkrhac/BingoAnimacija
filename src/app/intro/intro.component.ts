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
          halfminuteTrigger,
          lastTrigger
        } from './animations';

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
    halfminuteTrigger,
    lastTrigger
   ]
})
export class IntroComponent implements OnInit {
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
  oneMin: boolean = false;
  halfMin: boolean = false;
  clock: boolean = false;
  last: boolean = false;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.secToDraw = this.service.getSecToDraw();
    this.roundNr = this.service.getRoundNr();
    this.messages = this.service.getMesagesHr();
    if (this.secToDraw > 150)
      this.service.changeRoute();
    else {
      for (var i = 0; i < 35; i++) {
        this.imageStat.push('iv');
      }
      const drawTime = Date.now() + this.secToDraw * 1000;
      this.intro(drawTime);
    }
  }

  private intro(drawTime: number) {
    var now = Date.now();
    this.secToDraw = Math.floor((drawTime - now) / 1000);  
    this.minToShow = Math.floor(this.secToDraw / 60);
    this.secToShow = (this.secToDraw % 60) < 10 ? `0${this.secToDraw % 60}` : `${this.secToDraw % 60}`;
    if (this.secToDraw < 1)
      this.secToDraw = 1;
    if (this.secToDraw > 1) {
      setTimeout(() => {
        this.anim();
        this.intro(drawTime);
      },990);
    }
    else if (this.secToDraw == 1) {
      this.service.init();
      setTimeout(() => {
        this.service.changeRoute();
      },(drawTime - now) % 1000)
    }
  }

  private anim() {
    var i;
    switch(this.secToDraw) {
      case 150:
      case 149:
        if (this.canDoAction() == true) {
          // console.log(`6 png + ULTIMULUI => ${this.secToDraw}`);
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
          // console.log(`COTA PARIULUI => ${this.secToDraw}`);
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
          // console.log(`* png => ${this.secToDraw}`);
          this.first = true;
          this.fromLeftIn(i = 0,"final",7);
          this.secondMessages = false;
          this.images = true;
        }
        break;
      case 121:
      case 120:
        if (this.canDoAction() == true) {
          // console.log(`2 MINUTE RAMASE => ${this.secToDraw}`);
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
          // console.log(`2 MINUTE RAMASE END => ${this.secToDraw}`);
          this.twoMin = false;
          if (this.images == false) {
            this.first = true;
            this.fromLeftIn(i = 0,"final",7);
            this.images = true
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
          // console.log(`SANSE DE CASTIG => ${this.secToDraw}`);
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
          // console.log(`PARIOU IN COTA FIXA => ${this.secToDraw}`);
          this.thirdMessages = false;
          setTimeout(() => {
            this.fourthMessages = true;
          }, 640);        }
        break;
      case 81:
      case 80:
        if (this.canDoAction() == true) {
          // console.log(`PARIOU SIMPLU => ${this.secToDraw}`);
          this.fourthMessages = false;
          setTimeout(() => {
            this.fivethMessages = true;
          }, 640);
        }
        break;
      case 70:
      case 69:
        if (this.canDoAction() == true) {
          // console.log(`MARESTE-TI => ${this.secToDraw}`);
          this.fivethMessages = false;
          setTimeout(() => {
            this.sixthMessages = true;
          }, 640);
        }
        break;
      case 63:
      case 62:
        if (this.canDoAction() == true) {
          // console.log(`PARIOUL COMBINAT => ${this.secToDraw}`);
          this.sixthMessages = false;
          setTimeout(() => {
            this.seventhMessages = true;
          }, 640);
        }
        break;
      case 61:
      case 60:
        if (this.canDoAction() == true) {
          // console.log(`1 MINUT REMAS => ${this.secToDraw}`);
          this.oneMin = true;
          if (this.seventhMessages != true)
            this.seventhMessages = true;
        }
      break;
      case 57:
      case 56:
        if (this.canDoAction() == true) {
          // console.log(`1 MINUT REMAS END=> ${this.secToDraw}`);
          this.oneMin = false; 
        }
        break;
      case 51:
      case 50:
        if (this.canDoAction() == true) {
          // console.log(`PARIOUL COMBINAT - VARIANTE POSIBLE => ${this.secToDraw}`);
          this.seventhMessages = false;
          setTimeout(() => {
            this.eighthMessages = true;
          }, 640);
        }
        break;
      case 42:
        if (this.eighthMessages != true )
          this.eighthMessages = true;
        break;
      case 31:
      case 30:
        if (this.canDoAction() == true) {
          // console.log(`30 DE SECUNDE REMASE => ${this.secToDraw}`);
          this.eighthMessages = false; 
          setTimeout(() => {
            this.halfMin = true;
            this.clock = true;
          }, 640);         
        }
        break;
      case 27:
      case 26:
        if (this.canDoAction() == true) {
          // console.log(`30 DE SECUNDE REMASE END=> ${this.secToDraw}`);
          this.halfMin = false;
          if (this.clock != true)
            this.clock = true;
        }
        break;        
      case 19:
      case 18:
        if (this.canDoAction() == true) {
          // console.log(`PLASATI ULTIMATELE PARUIURI ACUM => ${this.secToDraw}`);
          this.last = true;
          if (this.clock != true)
            this.clock = true;
        }
        break;
      case 14:
      case 13:
        if (this.canDoAction() == true) {
          // console.log(`PLASATI ULTIMATELE PARUIURI ACUM END=> ${this.secToDraw}`);
          this.last = false;
          if (this.clock != true)
            this.clock = true;
        }
        break;
      case 12:
        if (this.clock != true)
          this.clock = true;
        break;
      case 6:
        if (this.clock != true)
          this.clock = true;
        break;
    }
    // console.log(` anim this.secToDraw ${this.secToDraw} => ${Date.now() % 100000}`);
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
