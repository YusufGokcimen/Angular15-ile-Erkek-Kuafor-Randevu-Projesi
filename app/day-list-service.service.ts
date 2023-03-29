import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import { Day } from 'src/models/Day';
import { DayList } from 'src/models/DataSource';


@Injectable({
  providedIn: 'root'
})
export class DayListServiceService {

  constructor() { }

  getDayList():Observable<Day[]>{
    return of(DayList)
  }
}
