import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import Stripe from 'stripe';

@Component({
  selector: 'app-user-booked-cars',
  templateUrl: './user-booked-cars.component.html',
  styleUrls: ['./user-booked-cars.component.css']
})
export class UserBookedCarsComponent implements OnInit {
  bookedCars:any=[]
   display:any;
   value:any;
   totalAmountToPay:any;
  constructor(private _service:CarService,private fb:FormBuilder,private _aservice:AccountService,private _router:Router,private route:ActivatedRoute,private confirmationService: ConfirmationService, private messageService: MessageService)
  {
    
     
  }
    
  ngOnInit(){
    
    this.value=localStorage.getItem('UserName');
    this.MyBookedCars();
    this._aservice.displayButton.next(false);
  }
  
  
MyBookedCars()
{
  
  console.log("My Username",this.value);
   this._service.MyBookedCars(this.value).subscribe((res)=>{
   console.log(res)
   this.bookedCars=res
   this.calculateTotalAmountToPay();
   console.log("total AMoumt:",this.totalAmountToPay)
 },(err)=>{
   console.log(err)
 })
}
calculateTotalAmountToPay() {
  this.totalAmountToPay = this.bookedCars.reduce((total: any, car: { totalRent: any; }) => total + car.totalRent, 0);
}

ProceedToPay()
{
  this._router.navigate(['ProceedToPay'])
}

id:any
confirmDelete(value:any) {
  console.log("Delete id",value.id)
  this.id=value.id
  this.confirmationService.confirm({
      message: 'You no Longer want this ride??',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
     
          this._service.DeleteBookedCar(this.id).subscribe((res)=>{
            console.log("Deleted Response")
            console.log(res)
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Ride Deleted Successfully' });
            this.bookedCars = this.bookedCars.filter((car: any) => car.id !== value.id);
          },(err)=>{
            console.log(err)
          })
      },
      reject: (type: ConfirmEventType) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                  break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                  break;
          }
      },
  });
}
GoBack()
{
  this._router.navigate(['Admin'])
 
}



}
