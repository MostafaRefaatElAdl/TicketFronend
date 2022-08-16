import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/models/Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css'],
})
export class TicketAddComponent implements OnInit {
  ticketToAdd:Ticket=new Ticket();

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {}

  submitTicket() {
    this.addTicket();
    this.router.navigate(['/']);
  }

  addTicket(){
    this.ticketService.addTicket(this.ticketToAdd).subscribe({
      next: (x) => (this.ticketToAdd=x),
    });
  }
}
