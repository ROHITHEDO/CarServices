import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-book-car',
  templateUrl: './see-book-car.component.html',
  styleUrls: ['./see-book-car.component.css']
})
export class SeeBookCarComponent {
  bookedCars:any=[]
       constructor(private _service:CarService,private fb:FormBuilder,private _aservice:AccountService,private _router:Router)
       {
        this._aservice.displayButton.next(true);
          this.loadBookedCars();
       }
     loadBookedCars()
     {
      this._service.ShowAllBookedCars().subscribe((res)=>{
        console.log(res)
        this.bookedCars=res
      },(err)=>{
        console.log(err)
      }
      )
     }
     GoBack()
     {
       this._router.navigate(['Admin'])
     }
       
}

