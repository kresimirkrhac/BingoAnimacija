import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
    console.log(`time = ${time}`);
    console.log(`minute = ${minute} second = ${second} minRemain = ${minRemain} => ${this.secToDraw}`);
    return this.secToDraw;
  }

  getRoundNr() {
    return this.roundNr;
  }

  public changeRoute() {
    var secToDraw = this.getSecToDraw();
    console.log(`onChangeRoute sec ${secToDraw} ===> ${name}`);
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
}
