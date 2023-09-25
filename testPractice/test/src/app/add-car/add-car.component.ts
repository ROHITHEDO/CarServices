import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
   
    constructor(private _service:CarService,private _router:Router,private fb:FormBuilder,private messageService: MessageService)
    {

    }
    AddCar=this.fb.group({
      Brand:['',[Validators.required]],
      pricePerHour:['',[Validators.required]],
      Description:['',Validators.required]
    })
      onSubmit(value:any)
      {
        this._service.AddCar(value).subscribe((res)=>
        {
          console.log(res)
          setTimeout(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Product Added Successfully',
            });
          }, 300);
          // alert("car Added Succesfully")
          this._router.navigate(['Admin']);
        },(err)=>{
          console.log(err)
        })
      }
        get Brand(){
             return this.AddCar.controls['Brand'];
        }
        get pricePerHour()
        {
          return this.AddCar.controls['pricePerHour'];
        }
        get Description()
        {
          return this.AddCar.controls['Description'];
        }
        GoBack()
        {
          this._router.navigate(['Admin'])
        }
}
