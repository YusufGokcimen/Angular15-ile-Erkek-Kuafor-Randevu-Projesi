import { Injectable } from '@angular/core';
import { Appointment } from 'src/models/Appointment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  appoints : Appointment[] = []

  constructor() { }

  getAppointmentList(): Observable<Appointment[]> {
    return of(this.appoints);
  }

  setAppointment(appointment:Appointment){
    this.appoints.push(appointment)
  }


}
