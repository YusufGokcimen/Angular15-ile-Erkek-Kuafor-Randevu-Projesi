import { Component } from '@angular/core';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppointmentService]
})
export class AppComponent {
  title = 'my-app';
}
