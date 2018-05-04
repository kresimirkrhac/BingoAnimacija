import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';
import { fadeInTrigger } from './animations';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  animations: [ fadeInTrigger ]
})
export class ResultsComponent implements OnInit {
  roundNr: number;
  drawQue: string[] = [];
  messages: string[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    var secToDraw = this.service.getSecToDraw();
    if (secToDraw > 195 || secToDraw < 150) {
      this.service.changeRoute();
    }
    this.drawQue = this.service.getdrawQue();
    this.roundNr = this.service.getRoundNr();
    this.messages = this.service.getMesagesHr();
    var secToWait = (secToDraw > 150) ? (secToDraw - 150) : 0;
    setTimeout(() => {
      this.service.changeRoute();
    },secToWait*1000);
  }

}
