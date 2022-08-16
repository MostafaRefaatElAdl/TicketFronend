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
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
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
    if ((((this.currentTime.getTime() - 7200000)  - dt.getTime()) / 60000 ) > 60 ) {
      this.TicketHandled();
    }
  }
}
