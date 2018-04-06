import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  drawQue: string[] = [];
  secToDraw: number = 300;
  roundNr: number = 255;

  constructor() { }

  Init() {
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
    console.log(`time = ${time}`);
    console.log(`minute = ${minute} second = ${second} minRemain = ${minRemain} => ${this.secToDraw}`);
    return this.secToDraw;
  }

  getRoundNr() {
    return this.roundNr;
  }
}
