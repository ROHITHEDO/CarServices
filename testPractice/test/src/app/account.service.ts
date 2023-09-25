import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, Subscription, catchError, delay, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  tokenSubscription = new Subscription()
  timeout: any;
  constructor(private _http:HttpClient,private _router:Router) { 
   
  }
  
  headers1 = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });
  options = { headers: this.headers1, withCredentials: true };
   userExist(value:any):Observable<any>
   {
    const url=`https://localhost:7299/login`
   return this._http.post<any>(url,value,this.options);

   }
   userSignUp(value:any):Observable<any>{
    debugger;
    const url="https://localhost:7299/register"
    return this._http.post<any>(url,value,this.options)
   }
   LogOut()
   {
    const url="https://localhost:7299/logout"
    return this._http.post<any>(url,this.options)
   }
   
   setToken(token:any)
   {
    localStorage.setItem('token',token)
   }
   getToken()
   {
    return localStorage.getItem('token')
   }
   isLoggedIn()
   {
     return !!localStorage.getItem('token');
   }

   setRole(role:any)
   {
    localStorage.setItem('role',role)
   }
   getRole()
   {
   return  localStorage.getItem('role')
   }
   setUserName(username:any)
   {
    localStorage.setItem('UserName',username)
   }

   getUserName()
   {
    return localStorage.getItem('username')
   }
    
   expirationCounter(timeout: any) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired: any) => {
      console.log('EXPIRED!!');
      this._router.navigate(['']);
    });
  }
   displayButton=new Subject<any>();
}
