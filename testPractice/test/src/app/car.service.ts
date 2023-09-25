import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http:HttpClient) { 
   
  }
  _token = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    Authorization: `Bearer ${this._token}`,
  });
  options = { headers: this.headers, withCredentials: true };

    ShowAllCars():Observable<any>
    {
      const url ="https://localhost:7299/GetAllCars"
      return this._http.get<any>(url,this.options)
    }
   AddCar(value:any):Observable<any>{
       const url ="https://localhost:7299/AddCar"
        return this._http.post<any>(url,value,this.options)
   }
   ShowAllBookedCars():Observable<any>
   {
    const url ="https://localhost:7299/AllBookCars"
    return this._http.get<any>(url,this.options)
   }
   BookForRide(id:any,data:any):Observable<any>{
    debugger;
    const url=`https://localhost:7299/${id}/book`
    return this._http.post<any>(url,data,{...this.options,responseType: 'json'})
   }

   GetCarById(id:any):Observable<any>
   {
    const url=`https://localhost:7299/${id}/GetCarById`
    return this._http.get<any>(url,this.options)
   }


   MyBookedCars(username:any):Observable<any>
   {
   
    const url=`https://localhost:7299/${username}/MyBookedCars`
    return this._http.get<any>(url,this.options);
   }
   DeleteCar(id:any):Observable<any>
   {
   
       const url=`https://localhost:7299/${id}/DeleteCar`
       return this._http.delete<any>(url,this.options)
   }


   DeleteBookedCar(id:any):Observable<any>
   {
   
       const url=`https://localhost:7299/${id}`
       return this._http.delete<any>(url,this.options)
   }
   
   private bookedCarsSubject = new Subject<any>();
  //  initiatePayment(): Observable<{ clientSecret: string }> {
  //   const url = 'https://localhost:44370/process-payment';
  //   return this._http.post<{ clientSecret: string }>(url, {}, this.options);
  // }
 GetPriceId(username:string):Observable<any>
  {
   
   const url=`https://localhost:7299/TotalRent?username=${username}`
   return this._http.get<any>(url,this.options);
  }
  CalculateTotalRent(username:string):Observable<any>
  {
   
   const url=`https://localhost:7299/CalculateTotalRent/${username}`
   return this._http.get<any>(url,this.options);
  }
  GetCoupon():Observable<any>
  {
        const url=`https://localhost:7299/ApplyCoupon`
        return this._http.post<any>(url,this.options);
 }  
   GetPromoCode():Observable<any>
   {
    const url=`https://localhost:7299/Promotion-code`
    return this._http.post<any>(url,this.options);
   }
   
   GetUrl(Priceid:any,Coupon:string):Observable<any>
   {
    const url=`
    https://localhost:7299/CheckOut-session?email=ro%40gmail.com&PriceId=${Priceid}&couponCode=${Coupon}`
    return this._http.get<any>(url,this.options);
   }
   GetAllCoupons():Observable<any>
   {
    const url=`https://localhost:7299/AllCoupons`
    return this._http.get<any>(url,this.options);
   }
}
