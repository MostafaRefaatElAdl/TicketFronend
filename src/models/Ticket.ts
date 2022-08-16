export class Ticket {
  id: number;
  phoneNumber: string;
  creationDate:Date;
  handled:boolean;
  constructor() {
    this.id=0;
    this.phoneNumber="";
    this.creationDate=new Date();
    this.handled=false;
  }
}