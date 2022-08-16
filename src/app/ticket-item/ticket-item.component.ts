import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/models/Ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent implements OnInit {
  @Input() ticketToShow: Ticket = new Ticket();

  constructor() { }

  ngOnInit(): void {
  }

  HandledClick(){
    
  }
}
