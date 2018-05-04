import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const introMessagesRo = [
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
  /* 45 */  "MINUT",
  /* 46 */  "Cotele BeSix pentru fiecare numar extras",
  /* 47 */  "Numaru evenimentului",
  /* 48 */  "Billa",
  /* 49 */  "Timp de pariere rămas",
  /* 50 */  "Următor evenimentului",
  /* 51 */  "RĂMASE"  
];
const introMessagesEn = [
  /*  0 */  "You have a chance to win",
  /*  1 */  "until extraction",
  /*  2 */  "LAST",
  /*  3 */  "NUMBER",
  /*  4 */  "Everything for just 2$!",
  /*  5 */  "If all your numbers",
  /*  6 */  "are extracted in the first six",
  /*  7 */  "BET COEFFICIENT",
  /*  8 */  "10,000",
  /*  9 */  "BeSix HAS THE BIGGER",
  /* 10 */  "CHANCES TO WIN!",
  /* 11 */  "IT WIL BE DRAW",
  /* 12 */  "35 NUMBER OF 49",
  /* 13 */  "BeSix",
  /* 14 */  "COEFFICIENTS ARE FIXED",
  /* 15 */  "NUMBER OF WINNERS",
  /* 16 */  "DOES NOT AFFECT THE WINNING AMOUNT",
  /* 17 */  "SIMPLY BET",
  /* 18 */  "SELECT 6 NUMBERS!",
  /* 19 */  "MINIMAL AMOUNT TO PAY ON TICKET:",
  /* 20 */  "2 $",
  /* 21 */  "INCREASE",
  /* 22 */  "CHANCE",
  /* 23 */  "PLAYING",
  /* 24 */  "SYSTEM",
  /* 25 */  "SYSTEM BET",
  /* 26 */  "Choose more than 6 lucky numbers, but up to 10!",
  /* 27 */  "Fixed bets on the system:",
  /* 28 */  "0.10 $, 0.50 $, 1 $ or 2 $",
  /* 29 */  "The minimum bet per ticket:",
  /* 30 */  "2 $",
  /* 31 */  "System bet - possible combinations",
  /* 32 */  "Bet with 7 numbers - 7 combinations",
  /* 33 */  "Bet with 8 numbers - 28 combinations",
  /* 34 */  "Bet with 9 numbers - 84 combinations",
  /* 35 */  "Bet with 10 numbers - 210 combinations",
  /* 36 */  "MINUTES",
  /* 37 */  "REMAINING",
  /* 38 */  "UNTIL EXTRACTION",
  /* 39 */  "SECONDS",
  /* 40 */  "PLACE",
  /* 41 */  "BETS",
  /* 42 */  "NOW!",
  /* 43 */  "LAST BETS",
  /* 44 */  "IS UNIQUE",
  /* 45 */  "MINUT",
  /* 46 */  "BeSix coefficient for each drawn number",
  /* 47 */  "Number of event",
  /* 48 */  "Number",
  /* 49 */  "Betting time left",
  /* 50 */  "Next Event",
  /* 51 */  "REMAINING"
];
const introMessagesHr = [
  /*  0 */  "Imate priliku za dobitak",
  /*  1 */  "do izvlačenja",
  /*  2 */  "ZADNJEG",
  /*  3 */  "BROJA",
  /*  4 */  "Sve za samo 2 kn!",
  /*  5 */  "Ako se svi vaši brojevi",
  /*  6 */  "izvuku u prvih 6",
  /*  7 */  "KOEFICIENT OKLADE",
  /*  8 */  "10,000",
  /*  9 */  "BeSix OMOGUČUJE VEĆE",
  /* 10 */  "ŠANSE ZA DOBITAK",
  /* 11 */  "IZVLAĆI SE",
  /* 12 */  "35 OD 49 BROJEVA",
  /* 13 */  "BeSix",
  /* 14 */  "KOEFICIENTI SU FIKSNI",
  /* 15 */  "BROJ DOBITNIKA",
  /* 16 */  "NE UTJEČE NA DOBITAK",
  /* 17 */  "JEDNOSTAVNE OKLADE",
  /* 18 */  "ODABERITE 6 BROJEVA!",
  /* 19 */  "MINIMALNA UPLATA ZA LISTIĆ:",
  /* 20 */  "2 KN",
  /* 21 */  "POVEČAJTE",
  /* 22 */  "ŠANSE",
  /* 23 */  "IGRANJEM",
  /* 24 */  "SISTEMA",
  /* 25 */  "SISTEMSKA OKLADA",
  /* 26 */  "Izaberite više od 6 sretnih brojeva, do najviše 10!",
  /* 27 */  "Fixne oklade na sistemu:",
  /* 28 */  "0.10 kn, 0.50 kn, 1 kn ili 2 kn",
  /* 29 */  "Minimalna uplata po listicu:",
  /* 30 */  "2 kn",
  /* 31 */  "Sistemska oklada - moguće kombinacije",
  /* 32 */  " 7 odigranih brojeva -   7 kombinacija",
  /* 33 */  " 8 odigranih brojeva -  28 kombinacija",
  /* 34 */  " 9 odigranih brojeva -  84 kombinacija",
  /* 35 */  "10 odigranih brojeva - 210 kombinacija",
  /* 36 */  "MINUTE",
  /* 37 */  "OSTALO",
  /* 38 */  "DO IZVLAČENJA",
  /* 39 */  "SEKUNDI",
  /* 40 */  "KLADITE",
  /* 41 */  "SE",
  /* 42 */  "SADA!",
  /* 43 */  "ZADNJE OKLADE",
  /* 44 */  "JE JEDINSTVEN",
  /* 45 */  "MINUTA",
  /* 46 */  "BeSix koeficienti za izvučeni broj",
  /* 47 */  "Broj događaja",
  /* 48 */  "Broj",
  /* 49 */  "Preostalo vrijeme klađenja",
  /* 50 */  "Slijedeći događaj",
  /* 51 */  "OSTALA"
];

@Injectable()
export class ServiceService {
  drawQue: string[] = [];
  secToDraw: number = 300;
  roundNr: number = 255;

  constructor(private router: Router) { }

  init() {
    this.drawQue.length = 0;
    for( var j = 0; j <= 35; j++) {
      var i = Math.floor(Math.random()*49+1);
      if( i <= 9)
        this.drawQue.push(`0${i}`);
      else
        this.drawQue.push(`${i}`);
    }
  }

  getdrawQue() {
    return this.drawQue;
  }

  getSecToDraw() {
    var time = new Date();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var minRemain = (minute%10 < 5) ? (5 - (minute%10) - 1) : (10 - (minute%10) - 1);
    this.secToDraw = minRemain * 60 + (60 - second);
    // console.log(`time = ${time}`);
    // console.log(`minute = ${minute} second = ${second} minRemain = ${minRemain} => ${this.secToDraw}`);
    return this.secToDraw;
  }

  getRoundNr() {
    return this.roundNr;
  }

  public changeRoute() {
    var secToDraw = this.getSecToDraw();
    // console.log(`onChangeRoute sec ${secToDraw} ===> ${name}`);
    if (secToDraw > 195 || secToDraw < 2) {
      this.router.navigateByUrl('/draw');
    }
    else if (secToDraw > 150) {
      this.router.navigateByUrl('/results');
    }
    else {
      this.router.navigateByUrl('/intro');
    }
  }

  public getMesagesRo() {
    return introMessagesRo;
  }

  public getMesagesEn() {
    return introMessagesEn;
  }

  public getMesagesHr() {
    return introMessagesHr;
  }
}
