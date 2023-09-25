import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { CarService } from './car.service';

@Injectable()
export class BookedCarsResolver implements Resolve<any[]> {
  constructor(private carService: CarService) {}

  resolve(): Observable<any[]> {
    return this.carService.MyBookedCars();
  }
}
