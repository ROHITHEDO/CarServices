import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-car-ride',
  templateUrl: './book-car-ride.component.html',
  styleUrls: ['./book-car-ride.component.css']
})
export class BookCarRideComponent {
    constructor(private _service:CarService,private fb:FormBuilder,private route:ActivatedRoute,private _router:Router){
   
    }

   bookingForm = this.fb.group({
      From: ['', Validators.required],
      To: ['', Validators.required],
     
    });
     totalRent:any;
   
   
    onSubmit(value:any)
    {
      const id=this.route.snapshot.paramMap.get('id')
      this._service.GetCarById(id).subscribe(
        (resp) => {
          
          console.log(resp);
          const fromDate: any = this.bookingForm.value.From;
          const toDate: any = this.bookingForm.value.To;
          const diffInMs = new Date(toDate).getTime() - new Date(fromDate).getTime();
          const diffInHours = diffInMs / (1000 * 60 * 60);
          this.totalRent = diffInHours * resp.pricePerHour;
          console.log("total rent", this.totalRent);
          this._service.BookForRide(id, value).subscribe(
            (res) => {
              alert("Car Book Successfully");
              console.log(res);
            },
            (err) => {
              console.log(err);
              if (err.error === "Car is not available for the selected time range.") {
                alert("Car is not available for this time slot");
              }
            }
          );
        },
        (err) => {
          console.log(err);
        }
      );
    
    }
      
    get From()
    {
      return this.bookingForm.controls['From'];
    }
    get To()
    {
      return this.bookingForm.controls['To']
    }
    GoBack()
    {
      this._router.navigate(['Admin'])
    }
}

