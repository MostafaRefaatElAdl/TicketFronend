import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Ticket } from 'src/models/Ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  rootUrl:string='https://localhost:7286/api/Tickets'
  constructor(private http: HttpClient) { }

  getTickets() : Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.rootUrl);
  }

  getTicketById(ticketId:number) : Observable<Ticket> {
    return this.http.get<Ticket>(`${this.rootUrl}/${ticketId}`);
  }

  addTicket(newTicket:Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(this.rootUrl,newTicket);
  }
}
