import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { routeStateTrigger } from './animations';
import { ServiceService } from './service.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { WebSocketService } from '../shared/common/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeStateTrigger]
})
export class AppComponent implements OnInit, OnDestroy {
  //ws
  socketMessageSubscription: Subscription;
  socketConnectionSubscription: Subscription;
  socketWasConnected: boolean;
  webSocketService: WebSocketService;
  WsHub = {
    message: 1,
    mainOfficeTicketAuth: 2,
    branchOfficeTicketAuth: 3,
    branchOfficeOffers: 4,
    bingo: 6
  }
  WsMessage = {
    subscriberAdd: 1,
    officeNewMessage: 2,
    officeRefreshMessage: 3,
    ticketAuthNew: 4,
    ticketAuthResolved: 5,
    ticketAuthRefresh: 6,
    offerUpdate: 7,
    bingoSubscriberAdd: 8,
    bingoOnBingo: 9,
    bingoTimer: 10,
    bingoRound: 11,

  }

  //bingo
  bingoTimer: number = 0;


  constructor(
    private service: ServiceService,
    injector: Injector) {
    this.webSocketService = injector.get(WebSocketService);
    this.webSocketService.connect();
  }

  ngOnDestroy() {
    this.socketConnectionSubscription.unsubscribe();
    this.socketMessageSubscription.unsubscribe();
  }

  ngOnInit() {
    let self = this;
    self.socketWasConnected = false;
    //subscribe to receieve messages from websocket
    this.socketMessageSubscription = this.webSocketService.messages
      .subscribe((data: any) => {
        //handle new bingo round
        if (data.Message == self.WsMessage.bingoTimer) {
          console.log(`stigao bingoTimer ==> ${data.Data.timer} ${new Date()}`)
          this.service.newSecToDrawHandler(data);
          if (data.Data.timer == 150)
            this.service.changeRoute("intro");
          // this.service.changeRoute();
        }
        else if (data.Message == self.WsMessage.bingoRound) {
          console.log(`stigao bingoRound ${data.Data.RoundNumber}`)
          this.service.newBingoRoundHandler(data);
        }
        else if (data.Message == self.WsMessage.bingoOnBingo) {
          console.log(`stigao bingoOnBingo`)
          this.service.newDrawQueHandler(data);
          // this.service.changeRoute();
        }
      });
    //subscribe to recieve info about web socket connection status
    this.socketConnectionSubscription = this.webSocketService.connectionStatus.subscribe((nr: any) => {
      //if nr > 0, connection is established
      if (nr > 0) {
        self.socketWasConnected = true;

        //add current user to websocket subscibers for Bingo
        this.webSocketService.send({
          hub: this.WsHub.bingo,
          message: this.WsMessage.bingoSubscriberAdd,
          subscriberId: 996532,
        });
      }
    });
    this.service.changeRoute();
  }

  routeState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || 'introPage';
  }
}
