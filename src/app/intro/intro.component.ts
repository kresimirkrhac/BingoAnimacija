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

const introMessages = [
/*  0 */  "Ai şanse să câştigi",
/*  1 */  "până la extragerea",
/*  2 */  "ULTIMULUI",
/*  3 */  "NUMĂR",
/*  4 */  "Totul pentru doar 2 lei!",
/*  5 */  "Dacă toate numerele tale",
/*  6 */  "sunt extrase în primele 6",
/*  7 */  "COTA PARIULUI",
/*  8 */  "10,000",
/*  9 */  "BeSix ESTE PARIUL CU CELE MAI MARI",
/* 10 */  "ŞANSE DE CÂŞTIG!",
/* 11 */  "SE EXTRAG",
/* 12 */  "35 DE NUMERE DIN 49",
/* 13 */  "BeSix",
/* 14 */  "PARIU ÎN COTĂ FIXĂ",
/* 15 */  "NUMĂRUL CÂŞTIGĂTORILOR",
/* 16 */  "NU INFLUENŢEAZĂ SUMA CÂŞTIGATA",
/* 17 */  "PARIUL SIMPLU",
/* 18 */  "ALEGE 6 NUMERE NOROCOASE!",
/* 19 */  "SUMA FIXĂ PARIATĂ PE BILET:",
/* 20 */  "2 LEI",
/* 21 */  "MĂREŞTE-ŢI",
/* 22 */  "ŞANSELE",
/* 23 */  "JUCÂND",
/* 24 */  "COMBINAT",
/* 25 */  "PARIUL COMBINAT",
/* 26 */  "Alege mai mult de 6 numere norocoase, dar maxim 10!",
/* 27 */  "Sume fixe pariate pe combinatie:",
/* 28 */  "0,10 lei, 0,50 lei, 1 leu sau 2 lei",
/* 29 */  "Suma minimă pe bilet:",
/* 30 */  "2 lei",
/* 31 */  "Pariul combinat - variante posibile",
/* 32 */  "Cu  7 numere ai   7 variante",
/* 33 */  "Cu  8 numere ai  28 variante",
/* 34 */  "Cu  9 numere ai  84 variante",
/* 35 */  "Cu 10 numere ai 210 variante",
/* 36 */  "MINUTE",
/* 37 */  "RĂMASE",
/* 38 */  "PȂNĂ LA EXTRAGERE",
/* 39 */  "DE SECUNDE",
/* 40 */  "PLASAȚI",
/* 41 */  "PARIURI",
/* 42 */  "ACUM!",
/* 43 */  "ULTIMELE",
/* 44 */  "ESTE UN",
/* 45 */  "MINUT"
];
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
  doAct = true;
  roundNr: number;
  imageStat: string[] = [];
  messages: string[] = introMessages;
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
          console.log(`6 png + ULTIMULUI => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"fadeIn",6);
          this.firstMessages = true;
        }
        break;
      case 144:
      case 143:
        if (this.canDoAction() == true) {
          console.log(`COTA PARIULUI => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"fadeIn",6);
          this.firstMessages = false;
          setTimeout(() => {
            this.secondMessages = true;
          }, 440);
        }
        break;
      case 137:
      case 136:
        if (this.canDoAction() == true) {
          console.log(`* png => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"final",7);
          this.secondMessages = false;
          setTimeout(() => {
            this.images = true;
          }, 440);
        }
        break;
      case 121:
      case 120:
        if (this.canDoAction() == true) {
          console.log(`2 MINUTE RAMASE => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"final",7);
          this.twoMin = true;
        }
        break;
      case 117:
      case 116:
        if (this.canDoAction() == true) {
          console.log(`2 MINUTE RAMASE END => ${this.secToDraw}`);
          this.twoMin = false;
        }
        break;
      case 96:
      case 95:
        if (this.canDoAction() == true) {
          console.log(`SANSE DE CASTIG => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"exit",7);
          this.images = false;
          this.thirdMessages = true;
        }
        break;
      case 90:
      case 89:
        if (this.canDoAction() == true) {
          console.log(`PARIOU IN COTA FIXA => ${this.secToDraw}`);
          this.thirdMessages = false;
          this.fourthMessages = true;
        }
        break;
      case 84:
      case 83:
        if (this.canDoAction() == true) {
          console.log(`PARIOU SIMPLU => ${this.secToDraw}`);
          this.fourthMessages = false;
          this.fivethMessages = true;
        }
        break;
      case 78:
      case 77:
        if (this.canDoAction() == true) {
          console.log(`MARESTE-TI => ${this.secToDraw}`);
          this.fivethMessages = false;
          this.sixthMessages = true;
        }
        break;
      case 72:
      case 71:
        if (this.canDoAction() == true) {
          console.log(`PARIOUL COMBINAT => ${this.secToDraw}`);
          this.sixthMessages = false;
          setTimeout(() => {
            this.seventhMessages = true;
          }, 200);
        }
        break;
      case 64:
      case 63:
        if (this.canDoAction() == true) {
          console.log(`PARIOUL COMBINAT - VARIANTE POSIBLE => ${this.secToDraw}`);
          this.seventhMessages = false;
          this.eighthMessages = true;
        }
        break;
      case 61:
      case 60:
        if (this.canDoAction() == true) {
          console.log(`1 MINUT REMAS => ${this.secToDraw}`);
          this.oneMin = true; 
        }
      break;
      case 57:
      case 56:
        if (this.canDoAction() == true) {
          console.log(`1 MINUT REMAS END=> ${this.secToDraw}`);
          this.oneMin = false; 
        }
        break;
      case 31:
      case 30:
        if (this.canDoAction() == true) {
          console.log(`30 DE SECUNDE REMASE => ${this.secToDraw}`);
          this.eighthMessages = false;          
          this.halfMin = true;
          this.clock = true;
        }
        break;
      case 27:
      case 26:
        if (this.canDoAction() == true) {
          console.log(`30 DE SECUNDE REMASE END=> ${this.secToDraw}`);
          this.halfMin = false;
        }
        break;        
      case 22:
      case 21:
        if (this.canDoAction() == true) {
          console.log(`PLASATI ULTIMATELE PARUIURI ACUM => ${this.secToDraw}`);
          this.last = true;
        }
        break;
      case 19:
      case 18:
        if (this.canDoAction() == true) {
          console.log(`PLASATI ULTIMATELE PARUIURI ACUM END=> ${this.secToDraw}`);
          this.last = false;
        }
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
    setTimeout(() => {
      this.doAct = true;
    }, 2020);
    return ret;
  }
}
