import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/models/Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  ticketsList:Ticket[]=[];

    //Pagination vars
    page: number = 1;
    count: number = 0;
    size: number = 5;
  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.ticketService.getTickets().subscribe({
      next: (x) => {
        this.ticketsList = x;
      },
    });
  }

    //Pagination func
    onTicketChange(event: number) {
      this.page = event;
      this.getTickets();
    }
}
