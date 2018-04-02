import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  drawQue: string[] = [];
  secToDraw: number = 288;
  roundNr: number = 255;

  constructor() { }

  Init() {
    for( var i = 15; i <= 49; i++) {
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
    return this.secToDraw;
  }

  getRoundNr() {
    return this.roundNr;
  }
}
