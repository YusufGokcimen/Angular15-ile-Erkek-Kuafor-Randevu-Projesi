import { Appointment } from "./Appointment"
import { Day } from "./Day"


export const DayList:Day[]=[
    {id: 0, name : "Pazartesi", intervals: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"]},
    {id: 1, name : "Salı", intervals: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"]},
    {id: 2, name : "Çarşamba", intervals: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"]},
    {id: 3, name : "Perşembe", intervals: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"]},
    {id: 4, name : "Cuma", intervals: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"]},
    {id: 5, name : "Cumartesi", intervals: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"]},
    {id: 6, name : "Pazar", intervals: ["Kapalıyız"]}

]

export const appointmentList:Appointment[] = [
]


export const checkboxesDataList =[
    {
        id:0,
        label: "Saç Sakal Yıkama",
        price : 100,
        isChecked : false
    },
    {
        id:1,
        label: "Ağda",
        price : 50,
        isChecked : false
    },
    {
        id:2,
        label: "Boya",
        price : 150,
        isChecked : false
    },
    {
        id:3,
        label: "Yüz Bakımı",
        price : 100,
        isChecked : false
    },
    {
        id:4,
        label: "Saç Bakımı + Fön",
        price : 100,
        isChecked : false
    },
    {
        id:5,
        label: "Masaj",
        price : 200,
        isChecked : false
    }
]