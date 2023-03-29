import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/models/Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit  {

  appointments : Appointment[] = []
  

  constructor(private appointmentService: AppointmentService) {
    
  }

  ngOnInit(): void {
    this.getAppointment()
  }

  getAppointment():void{
    this.appointmentService.getAppointmentList().subscribe(appoint => {
      this.appointments= appoint
    })
  }

  

  

}