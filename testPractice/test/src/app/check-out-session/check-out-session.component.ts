import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-out-session',
  templateUrl: './check-out-session.component.html',
  styleUrls: ['./check-out-session.component.css']
})
export class CheckOutSessionComponent {
  getUsername: any;
  StripePriceID: any;
  CouponId: any;
  url: any;
  open_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QUAywMAS7OK9osx86uxX3ri8U0ADE2MmIQ&usqp=CAU"

  constructor(private _service: CarService, private _aservice: AccountService, private _router: Router, private route: ActivatedRoute) {
    this.getUsername = localStorage.getItem('UserName')
    this._service.CalculateTotalRent(this.getUsername).subscribe((re) => {
      console.log(re)
      this._service.GetPriceId(this.getUsername).subscribe((res) => {
        console.log("Get Price Id", res)
        this.StripePriceID = res[0]._StripePriceID;
        this._service.GetAllCoupons().subscribe((availableCoupon) => {
          console.log("Available cars", availableCoupon);
          this.availableCoupon = availableCoupon;
        }, (err) => {
          console.log(err)
        });
      }, (err) => {
        console.log(err)
      })
    }, (err) => {
      console.log(err)
    })
  }

  availableCoupon: any = [];
  storevalue: any;

  onDropdownChange(event: any) {
    this.storevalue = event.value.id;
    console.log('Selected value from the dropdown:', this.storevalue);
    this._service.GetUrl(this.StripePriceID, this.storevalue).subscribe((response) => {
      console.log("url api", response)
      this.url = response.url;
      console.log(this.url)
    }, (err) => {
      console.log(err);
    })
  }
}
