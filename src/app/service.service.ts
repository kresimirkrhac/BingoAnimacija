import { Inject, Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { BingoRoundDetailsDto } from '../shared/BingoRoundDetailsDto';
import { NumberStatistic } from "./models/NumberStatistic";
import { ColorStatistic } from "./models/ColorStatistic";

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
  /* 46 */  "Cotele pentru fiecare numar extras",
  /* 47 */  "Numaru evenimentului",
  /* 48 */  "Billa",
  /* 49 */  "Timp de pariere rămas",
  /* 50 */  "Următor evenimentului",
  /* 51 */  "RĂMASE",
  /* 52 */  "CELE MAI BUNE JOCURI",
  /* 53 */  "CULORI CELE MAI JUCATE"
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
  /* 46 */  "Coefficient for each drawn number",
  /* 47 */  "Number of event",
  /* 48 */  "Number",
  /* 49 */  "Betting time left",
  /* 50 */  "Next Event",
  /* 51 */  "REMAINING",
  /* 52 */  "MOST PLAYED NUMBERS",
  /* 53 */  "MOST PLAYED COLORS"
];
const introMessagesHr = [
  /*  0 */  "Imate priliku za dobitak",
  /*  1 */  "do izvlačenja",
  /*  2 */  "ZADNJEG",
  /*  3 */  "BROJA",
  /*  4 */  "Sve za samo 2 km!",
  /*  5 */  "Ako se svi vaši brojevi",
  /*  6 */  "izvuku u prvih 6",
  /*  7 */  "KOEFICIENT OKLADE",
  /*  8 */  "10,000",
  /*  9 */  "BeSix OMOGUČUJE VEĆE",
  /* 10 */  "ŠANSE ZA DOBITAK",
  /* 11 */  "IZVLAČI SE",
  /* 12 */  "35 OD 49 BROJEVA",
  /* 13 */  "BeSix",
  /* 14 */  "KOEFICIENTI SU FIKSNI",
  /* 15 */  "BROJ DOBITNIKA",
  /* 16 */  "NE UTJEČE NA DOBITAK",
  /* 17 */  "JEDNOSTAVNE OKLADE",
  /* 18 */  "ODABERITE 6 BROJEVA!",
  /* 19 */  "MINIMALNA UPLATA ZA LISTIĆ:",
  /* 20 */  "2 KM",
  /* 21 */  "POVEĆAJTE",
  /* 22 */  "ŠANSE",
  /* 23 */  "IGRANJEM",
  /* 24 */  "SISTEMA",
  /* 25 */  "SISTEMSKA OKLADA",
  /* 26 */  "Izaberite više od 6 sretnih brojeva, do najviše 10!",
  /* 27 */  "Fixne oklade na sistemu:",
  /* 28 */  "0.10 km, 0.50 km, 1 km ili 2 km",
  /* 29 */  "Minimalna uplata po listicu:",
  /* 30 */  "2 km",
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
  /* 46 */  "Koeficienti za izvučeni broj",
  /* 47 */  "Broj događaja",
  /* 48 */  "Broj",
  /* 49 */  "Preostalo vrijeme klađenja",
  /* 50 */  "Slijedeći događaj",
  /* 51 */  "OSTALA",
  /* 52 */  "NAJVIŠE IGRANI BROJEVI",
  /* 53 */  "NAJVIŠE IGRANE BOJE"
];

@Injectable()
export class ServiceService {
  secToDraw: number = -1;
  secToDrawSocket: number = 0;
  timeSocket: Date = undefined;
  roundNr: number = -1;
  drawQue: number[] = [];
  subSecToDraw: Subject<number>;
  subRoundNr: Subject<number>;
  subDrawQue: Subject<number[]>;
  http: Http;
  roundResults: BingoRoundDetailsDto;
  numberStatistic: NumberStatistic[] = [];
  colorStatistic: ColorStatistic[] = [];

  constructor(
    injector: Injector,
    private router: Router,
    @Inject(Http) http: Http) {
    this.http = http;
    this.subSecToDraw = new Subject();
    this.subRoundNr = new Subject();
    this.subDrawQue = new Subject();
  }

  getdrawQue() {
    return this.drawQue;
  }
  
  getSecToDraw() {
    if (this.timeSocket != undefined) {
      var time = new Date();
      var year = this.timeSocket.getFullYear();
      var mounth = this.timeSocket.getMonth();
      var day = this.timeSocket.getDate();
      var hours = this.timeSocket.getHours();
      var minutes = this.timeSocket.getMinutes();
      var seconds = this.timeSocket.getSeconds();
      var newtime = new Date(year, mounth, day, hours, minutes, seconds);
      newtime.setSeconds(seconds + this.secToDrawSocket);
      
      var minutes = newtime.getMinutes();
      var seconds = newtime.getSeconds();
      this.secToDraw = (newtime.getTime() - time.getTime()) / 1000;
      if (this.secToDraw == 0)
        this.secToDraw = 300;
    }
    // console.log(`secToDraw => ${this.secToDraw}  ==> ${new Date()}`);
    return this.secToDraw;
  }

  getRoundNr() {
    return this.roundNr;
  }

  public changeRoute(route: string = "") {
    var secToDraw = this.getSecToDraw();
    // console.log(`onChangeRoute secToDraw ${secToDraw} (${this.secToDraw}) ===> route ->${route}<-`);
    if (secToDraw == -1)
      route = "intro";

    if (route == "") {
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
    else {
      this.router.navigateByUrl('/' + route);
    }
  }
  
  public getColors() {
    return ["bgpurple","bgred","bgyellow","bgblue","bgorange","bggreen","bgrose"];
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

  newSecToDrawHandler(data: any) {
    if (data.Data) {
      this.secToDrawSocket = data.Data.timer;
      this.timeSocket = new Date();
      this.subSecToDraw.next(this.secToDrawSocket);
    }
  }

  newBingoRoundHandler(data: any) {
    if (data.Data) {
      this.roundNr = data.Data.RoundNumber;
      this.subRoundNr.next(this.roundNr);
    }
  }
  
  newDrawQueHandler(data: any)  {
    this.drawQue.length = 0;
    if (data.Data) {
      Object.keys(data.Data).forEach(element => {
        if (element.startsWith('i'))
        this.drawQue.push(data.Data[element].toString());
      });
    }
    this.subDrawQue.next(this.drawQue);
  }
  newBingoNumberStatisticHandler(data: any) {
    this.numberStatistic = [];
    if (data.Data !== undefined && data.Data.length > 0) {
      for (var i = 0; i < data.Data.length; i++) {
        var numStat        = new(NumberStatistic);
        numStat.Number     = data.Data[i].Number;
        numStat.Count      = data.Data[i].Count;
        numStat.Percentage = data.Data[i].Percentage;
        this.numberStatistic.push(numStat);
      }
    }
  }
  getBingoNumberStatistic(mode: boolean) {
    var numbStat: NumberStatistic[] = [];
    if (mode) {
      for(var i = this.numberStatistic.length/2; i < this.numberStatistic.length; i++) {
        numbStat.push(this.numberStatistic[i]);
      }
    }
    else {
      for(var i = 0; i < this.numberStatistic.length/2; i++) {
        numbStat.push(this.numberStatistic[i]);
      }
    }
    return numbStat;
  }

  colorIndex(colorName: string): number {
    var colorNumber = 0;
    if (colorName == "Purple")   return 0;
    else if (colorName == "Red") return 1;
    else if (colorName == "Yellow") return 2;
    else if (colorName == "Blue") return 3;
    else if (colorName == "Orange") return 4;
    else if (colorName == "Green") return 5;
    else if (colorName == "Pink") return 6;
    return 0;
  }
  newBingoColorStatisticHandler(data: any) {
    this.colorStatistic = [];
    if (data.Data !== undefined && data.Data.length > 0) {
      for (var i = 0; i < data.Data.length; i++) {
        var colStat        = new(ColorStatistic);
        colStat.Color      = data.Data[i].Color;
        colStat.Number     = this.colorIndex(colStat.Color);
        colStat.Count      = data.Data[i].Count;
        colStat.Percentage = data.Data[i].Percentage;
        this.colorStatistic.push(colStat);
      }
    }
  }
  getBingoColorStatistic() {
    return this.colorStatistic;
  }

  getRoundResults(roundNumber: any) {
    let url_ = "http://xbet.spl.ba/xbet-office/api/services/app/Bingo/GetRoundResults?";
    if (this.roundNr !== undefined)
      url_ += "RoundNumber=" + encodeURIComponent("" + (this.roundNr - 1)) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };
    let self = this;
    self.http.get(url_, options_)
      .map((response: any) => {
        return self.processResponse(response);
      })
      .subscribe((result) => {
        this.roundResults = result;
        if (this.roundResults != null && this.roundResults.numbers != null) {
          let numbers = this.roundResults.numbers.replace('{', '').replace('}', '');
          let helper = numbers.split(',');
          helper.pop();
          helper.pop();
          let results = new Array();
          helper.forEach(function (item) {
            let test = item.split(':');
            results.push(test[1]);
          });
          results.pop();
          self.drawQue = results;
          self.subDrawQue.next(self.drawQue);
         self.changeRoute();
        }
        else { 
          self.drawQue = [];
        }
      });
  }

  processResponse(response: any) {
    const responseText = response.text();
    const status = response.status;
    if (status === 200) {
      let result200: BingoRoundDetailsDto = null;
      let resultData200 = responseText === "" ? null : JSON.parse(responseText);
      result200 = resultData200 ? BingoRoundDetailsDto.fromJS(resultData200) : new BingoRoundDetailsDto();
      return result200;
    }
  }
}
