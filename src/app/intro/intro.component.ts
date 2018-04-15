import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ServiceService } from '../service.service';
import { fromLeftAnimTrigger } from './animations';

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
/* 14 */  "ESTE UN PARIU ÎN COTĂ FIXĂ",
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
/* 39 */  "DE SECUNDE"
];
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [ fromLeftAnimTrigger ]
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
      case 145:
      case 144:
        if (this.canDoAction() == true) {
          console.log(`COTA PARIULUI => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"fadeIn",6);
          this.firstMessages = false;
          this.secondMessages = true;
        }
        break;
      case 138:
      case 137:
        if (this.canDoAction() == true) {
          console.log(`* png => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"final",7);
          this.secondMessages = false;
          this.images = true;
        }
        break;
      case 120:
      case 119:
        if (this.canDoAction() == true) {
          console.log(`2 MINUTE RAMASE => ${this.secToDraw}`);
          this.fromLeftIn(i = 0,"final",7);
          this.twoMin = true;
        }
        break;
      case 115:
      case 110:
        if (this.canDoAction() == true) {
          console.log(`2 MINUTE RAMASE END => ${this.secToDraw}`);
          this.twoMin = false;
        }
        break;
      case 95:
      case 94:
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
      case 85:
      case 84:
        if (this.canDoAction() == true) {
          console.log(`PARIOU SIMPLU => ${this.secToDraw}`);
          this.fourthMessages = false;
          this.fivethMessages = true;
        }
        break;
      case 80:
      case 79:
        if (this.canDoAction() == true) {
          console.log(`MARESTE-TI => ${this.secToDraw}`);
          this.fivethMessages = false;
          this.sixthMessages = true;
        }
        break;
      case 75:
      case 74:
        if (this.canDoAction() == true) {
          console.log(`PARIOUL COMBINAT => ${this.secToDraw}`);
          this.sixthMessages = false;
          this.seventhMessages = true;
        }
        break;
      case 65:
      case 64:
        if (this.canDoAction() == true) {
          console.log(`PARIOUL COMBINAT - VARIANTE POSIBLE => ${this.secToDraw}`);
          this.seventhMessages = false;
          this.eighthMessages = true;
        }
        break;
      case 60:
      case 59:
        if (this.canDoAction() == true) {
          console.log(`1 MINUT REMAS => ${this.secToDraw}`);
          this.oneMin = true; 
        }
        break;
        case 55:
        case 54:
          if (this.canDoAction() == true) {
            console.log(`1 MINUT REMAS END=> ${this.secToDraw}`);
            this.oneMin = false; 
          }
          break;
      case 30:
      case 29:
        if (this.canDoAction() == true) {
          console.log(`30 DE SECUNDE REMASE => ${this.secToDraw}`);
          this.halfMin = true;
        }
        break;
      case 23:
      case 22:
        if (this.canDoAction() == true) {
          console.log(`PLASATI ULTIMATELE PARUIURI ACUM => ${this.secToDraw}`);
        }
        break;
    }
    // console.log(` anim this.secToDraw ${this.secToDraw} => ${Date.now() % 100000}`);
  }

  private fromLeftIn(index: number, state: string, count: number) {
    setTimeout(() => {
      this.imageStat[index] = state;
      if (index < count - 1)
        this.fromLeftIn(index+1,state, count);
    }, 200);
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
