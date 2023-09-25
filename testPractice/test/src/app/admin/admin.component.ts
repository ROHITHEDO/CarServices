import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Route, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
   constructor(private _service:CarService,private _router:Router,private _aservice:AccountService,private confirmationService: ConfirmationService, private messageService: MessageService)
   {
    
     this._aservice.displayButton.next(true);
    this.role=this._aservice.getRole();
      this.loadProducts();
   }
   products:any=[];
role:any;
loading:any=true;
loadProducts()
{
   this._service.ShowAllCars().subscribe((res)=>{
    this.loading=false;
    console.log(res)
    this.products=res
   },(err)=>{
        console.log(err)
   })
}
// id:any
// confirmDelete(value:any) {
//   console.log('value',value)
//   console.log("Delete id",value.id)
//   this.id=value.id
//   this.confirmationService.confirm({
//       message: 'Do you want to delete this record?',
//       header: 'Delete Confirmation',
//       icon: 'pi pi-info-circle',
//       accept: () => {
//         debugger;
//           this._service.DeleteCar(this.id).subscribe((res)=>{
//             console.log("Deleted Response")
//             console.log(res)
//             this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Car Deleted' });
//             this.products = this.products.filter((car: any) => car.id !== value.id);
//           },(err)=>{
//             console.log(err)
//           })
//       },
//       reject: (type: ConfirmEventType) => {
//           switch (type) {
//               case ConfirmEventType.REJECT:
//                   this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
//                   break;
//               case ConfirmEventType.CANCEL:
//                   this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
//                   break;
//           }
//       },
//   });
// }
AddCar()
{
  this._router.navigate(['Add'])
}
AllBookedCars(){
  this._router.navigate(["BookedCars"])
}
BookCar(value:any)
{
  this._router.navigate(['BookForRide',value.id])
}

MyBookedRides()
{
  this._router.navigate(['MyBookedCars'])
}
}
