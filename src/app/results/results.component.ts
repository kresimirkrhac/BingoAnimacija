import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.Init(); 
    this.drawQue = this.service.getdrawQue();
    this.roundNr = this.service.getRoundNr();
  }

}
