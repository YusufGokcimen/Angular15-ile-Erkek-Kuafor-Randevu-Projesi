export class Appointment {
  push() {
    throw new Error('Method not implemented.');
  }
  id: number;
  username: string;
  day: string;
  interval: string;
  process : string[] | any;
  totalPrice : number;

  constructor(id: number, username: string, day: string, interval: string, process: string[], totalPrice:number) {
    this.id = id;
    this.username = username;
    this.day = day;
    this.interval = interval;
    this.process = process
    this.totalPrice = totalPrice
  }

}
