import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  constructor(
    private fb: FormBuilder,
    private _service: AccountService,
    private _router: Router
  ) {}
  loginObj = this.fb.group({
    Username: ['', [Validators.required]],
    Password: ['', [Validators.required]],
  });
  get name() {
    return this.loginObj.controls['Username'];
  }
  get password() {
    return this.loginObj.controls['Password'];
  }
  onsubmit(value:any)
  {
   console.log(value)
   this._service.userExist(value).subscribe((res)=>
   {
    console.log(res)
    this._service.setToken(res.token);
    this._service.setRole(res.role);
    this._service.setUserName(res.username);
    this._router.navigate(['Admin'])
   },(err:any)=>{
    console.log(err)
    alert("you are not registered yet")
   })
  
  }
  GoToSignUp()
  {
    this._router.navigate(['SignUp'])
  }
 
}

