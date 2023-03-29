import { Component, Input, OnInit } from '@angular/core';
import {  appointmentList, DayList } from 'src/models/DataSource';
import { Appointment } from 'src/models/Appointment';
import { checkboxesDataList } from 'src/models/DataSource';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { deletedIntervals } from 'src/models/DeletedIntervals';



@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})


export class InputsComponent implements OnInit {

  constructor(private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.getDayList()
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  inputAppoints = this.appointmentService.appoints

  selectedItemsList: any = [];
  checkedIDs: any = [];
  deletedIntervalsList : any = []
  newArray:any = []

  checkboxesDataList = checkboxesDataList


  dayList = DayList

  intervalList: any;

  userName: any;
  intervalVal: any;
  dayVal: any;
  sacsakal: any;
  agda: any;
  id = 0;
  procecess: any = []
  totalPrice: any = 0;
  dayName:any;
  closed:boolean = false
  index:any


  getDayList() {
    return this.dayList
  }

  getIntervals(dayVal: any) {
    if (dayVal) {
      return this.dayList[dayVal].intervals
    }
    else {
      return this.dayList[0].intervals
    }
  }

  takeappointment(dayVal: any, intervalVal: any) {

    if (this.selectedItemsList.length == 0) {
      alert("En az bir hizmet seçmeniz gerekmektedir!")
      return
    }
    else {
      this.index = this.dayList[dayVal].intervals?.indexOf(intervalVal)
      var lastIndex: any = this.dayList[dayVal].intervals?.length
      lastIndex -= 1

      var indexControl = lastIndex - this.index


      if (this.selectedItemsList.length > 1 && this.index === lastIndex) {
        alert('Seçtiğiniz hizmetler için yeteri kadar süre bulunmamaktadır')
        return
      }
      else if (indexControl < this.selectedItemsList.length) {
        alert('Seçtiğiniz işlemler için ' + this.selectedItemsList.length + " saat kadar süre gerekmektedir fakat mesai 19:00'da bittiği için başka gün seçmelisiniz")
      }
      else if(this.userName == undefined || this.userName == " " ){
        alert('Kullanıcı adı alanı boş bırakılamaz')
      }
      else {
        this.id++
        this.dayVal = dayVal
        this.intervalVal = intervalVal
        
        this.getProcessName()

        

        for(let i = 0; i<this.selectedItemsList.length; i++){
          
          if (this.dayList[dayVal].intervals) {
            const interval = this.dayList[dayVal].intervals?.[this.index+i];
            this.newArray.push(interval)
          }
        }

        var deletedInterval = new deletedIntervals(this.id, Number(this.dayVal), this.newArray)

        this.deletedIntervalsList.push(deletedInterval)
        this.newArray = []

        this.dayList[dayVal].intervals?.splice(this.index, this.selectedItemsList.length)
        if(dayVal == 0){
          this.dayName = "Pazartesi"
        }
        else if(dayVal == 1){
          this.dayName = "Salı"
        }
        else if(dayVal == 2){
          this.dayName = "Çarşamba"
        }
        else if(dayVal == 3){
          this.dayName = "Perşembe"
        }
        else if(dayVal == 4){
          this.dayName = "Cuma"
        }
        else{
          this.dayName = "Cumartesi"
        }
        var newAppointment = new Appointment(this.id, this.userName, this.dayName, this.intervalVal, this.procecess, this.totalPrice)
        this.appointmentService.setAppointment(newAppointment)
        this.procecess = []
      }
    }
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  changeSelection() {
    this.fetchSelectedItems()
    this.getTotalPrice()
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }

  getProcessName() {
    this.selectedItemsList.forEach((element: { label: string }) => {
      this.procecess.push(" " + element.label);
      return this.procecess
    });
  }

  getTotalPrice() {
    this.totalPrice = 0;
    Object.values(this.selectedItemsList).forEach((element: any) => {
      this.totalPrice += element.price;
    });
  }


  sunday(dayVal: any) {
    if (dayVal != 6) {
      this.closed = false
      return true
    }
    else {
      this.closed = true
      this.totalPrice = 0;
      this.selectedItemsList.forEach((element: { isChecked: boolean; }) => {
        element.isChecked = false
      })
      return false
    }

  }

  tikla(){
    console.log(this.deletedIntervalsList)
  }

  intervals:string[] = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"]

  deleteAppointment(id : number){
    const index = this.appointmentService.appoints.findIndex(appoint => {appoint.id === id})
    this.appointmentService.appoints.splice(index,1)
    this.pushDeletedIntervals(id)
    
    
  }

  pushDeletedIntervals(id:number){
    var i = this.deletedIntervalsList[id-1].intervals.length
    for( i ; i>0; i-- ){
      console.log(i)
        this.dayList[this.deletedIntervalsList[id-1].day].intervals?.splice(this.index, 0, this.deletedIntervalsList[id-1].intervals[i-1])
      }

      this.deletedIntervalsList.splice(id-1,1)

    }
  }


 // if (this.dayList[dayVal].intervals) {
      //   this.dayList[dayVal].intervals = this.dayList[dayVal].intervals?.filter((item : any) => {
      //     return item !== intervalVal;
      //   });