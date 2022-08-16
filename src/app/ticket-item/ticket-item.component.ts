import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/models/Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css'],
})
export class TicketItemComponent implements OnInit {
  @Input() ticketToShow: Ticket = new Ticket();

  currentTime:Date= new Date();
  ticketStatusColor:string="yellow";
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.statusColorHandle();
    this.AfterSixtyMinutes();
  }

  HandledClick() {
    this.TicketHandled();
  }

  TicketHandled() {
    this.ticketToShow.handled = true;
    this.ticketService.updateTicket(this.ticketToShow).subscribe({
      next: (x) => (this.ticketToShow = x),
    });
  }

  AfterSixtyMinutes(){
    const dt = new Date(this.ticketToShow.creationDate)
    if ((((this.currentTime.getTime() - 7200000)  - dt.getTime()) / 60000 ) >= 60 ) {
      this.TicketHandled();
    }
  }

  statusColorHandle(){
    this.calcTime(15,"yellow");
    this.calcTime(30,"green");
    this.calcTime(45,"blue");
    this.calcTime(60,"red");
  }

  calcTime(timeToCalc:number , color:string){
    const dt = new Date(this.ticketToShow.creationDate)
    if ((((this.currentTime.getTime() - 7200000)  - dt.getTime()) / 60000 ) >= timeToCalc ){
      this.ticketStatusColor=color;
    }
  }
}
