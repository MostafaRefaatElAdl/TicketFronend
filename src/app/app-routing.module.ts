import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';

const routes: Routes = [
  { path: '', component: TicketsListComponent },
  { path: 'add', component: TicketAddComponent },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
