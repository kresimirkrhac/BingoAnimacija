import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ServiceService } from '../service.service';
import { fadeInFirstTrigger } from './animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [ fadeInFirstTrigger ]
})
export class IntroComponent implements OnInit {
  messages: string[] = [
    "Ai şanse să câştigi",
    "până la extragerea",
    "ULTIMULUI",
    "NUMĂR",
    "Totul pentru doar 2 lei!",
    "Dacă toate numerele tale",
    "sunt extrase în primele 6",
    "COTA PARIULUI",
    "10,000",
    "BeSix ESTE PARIUL CU CELE MAI MARI",
    "ŞANSE DE CÂŞTIG!",
    "SE EXTRAG",
    "35 DE NUMERE DIN 49",
    "BeSix",
    "ESTE UN PARIU ÎN COTĂ FIXĂ",
    "NUMĂRUL CÂŞTIGĂTORILOR",
    "NU INFLUENŢEAZĂ SUMA CÂŞTIGATA",
    "PARIUL SIMPLU",
    "ALEGE 6 NUMERE NOROCOASE!",
    "SUMA FIXĂ PARIATĂ PE BILET:",
    "2 LEI",
    "MĂREŞTE-ŢI",
    "ŞANSELE",
    "JUCÂND",
    "COMBINAT",
    "PARIUL COMBINAT",
    "Alege mai mult de 6 numere norocoase, dar maxim 10!",
    "Sume fixe pariate pe combinatie:",
    "0,10 lei, 0,50 lei, 1 leu sau 2 lei",
    "Suma minimă pe bilet:",
    "2 lei",
    "Pariul combinat - variante posibile",
    "Cu  7 numere ai   7 variante",
    "Cu  8 numere ai  28 variante",
    "Cu  9 numere ai  84 variante",
    "Cu 10 numere ai 210 variante"
  ]
  fadeInStat: string[] = [];
  secToDraw: number;
  doAct = true;
  roundNr: number;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.secToDraw = this.service.getSecToDraw();
    this.roundNr = this.service.getRoundNr();
    if (this.secToDraw > 150)
      this.service.changeRoute();
    else {
      for (var i = 0; i < 6; i++)
        this.fadeInStat.push('vis');
      var drawTime = Date.now() + this.secToDraw * 1000;
      this.intro(drawTime);
    }
  }

  private intro(drawTime: number) {
    var now = Date.now();
    this.secToDraw = Math.floor((drawTime - now) / 1000);
    if (this.secToDraw < 1)
      this.secToDraw = 1;
    // console.log(`secToDraw ${this.secToDraw} now ${now} drawTime ${drawTime} razlika (${(drawTime - Date.now()) % 1000}) => ${Date.now() % 100000}`);
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
    switch(this.secToDraw) {
      case 150:
      case 149:
        if (this.canDoAction() == true) {
          console.log(`6 png + ULTIMULUI => ${this.secToDraw}`);
        }
        break;
      case 145:
      case 144:
        if (this.canDoAction() == true) {
          console.log(`COTA PARIULUI => ${this.secToDraw}`);
        }
        break;
      case 138:
      case 137:
        if (this.canDoAction() == true) {
          console.log(`* png => ${this.secToDraw}`);
        }
        break;
      case 120:
      case 119:
        if (this.canDoAction() == true) {
          console.log(`2 MINUTE RAMASE => ${this.secToDraw}`);
        }
        break;
      case 95:
      case 94:
        if (this.canDoAction() == true) {
          console.log(`SANSE DE CASTIG => ${this.secToDraw}`);
        }
        break;
      case 90:
      case 89:
        if (this.canDoAction() == true) {
          console.log(`PARIOU IN COTA FIXA => ${this.secToDraw}`);
        }
        break;
      case 85:
      case 84:
        if (this.canDoAction() == true) {
          console.log(`PARIOU SIMPLU => ${this.secToDraw}`);
        }
        break;
      case 80:
      case 79:
        if (this.canDoAction() == true) {
          console.log(`MARESTE-TI => ${this.secToDraw}`);
        }
        break;
      case 75:
      case 74:
        if (this.canDoAction() == true) {
          console.log(`PARIOUL COMBINAT => ${this.secToDraw}`);
        }
        break;
      case 65:
      case 64:
        if (this.canDoAction() == true) {
          console.log(`PARIOUL COMBINAT - VARIANTE POSIBLE => ${this.secToDraw}`);
        }
        break;
      case 60:
      case 59:
        if (this.canDoAction() == true) {
          console.log(`1 MINUT REMAS => ${this.secToDraw}`);
        }
        break;
      case 30:
      case 29:
        if (this.canDoAction() == true) {
          console.log(`30 DE SECUNDE REMASE => ${this.secToDraw}`);
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

  private canDoAction(): boolean {
    var ret = this.doAct;
    this.doAct = false;
    setTimeout(() => {
      this.doAct = true;
    }, 2020);
    return ret;
  }
}
