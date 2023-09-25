import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { passwordValidator } from 'passwordValidator';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 
  constructor(
    private fb: FormBuilder,
    private _service: AccountService,
    private _router: Router
  ) {
      this._service.displayButton.next(true);
  }
  UserObj = this.fb.group(
    {
      Username: ['', [Validators.required]],
      Email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      Password: ['', [Validators.required, this.customPasswordValidator]],
      ConfirmPassword: ['', [Validators.required]],
    },
    { validator: passwordValidator }
  );
   onSubmit(value:any)
   {
    debugger;
       this._service.userSignUp(value).subscribe((res)=>
       {
        console.log(res)
        alert("user register successfully")
        this._router.navigate(['']);
       },(err)=>
       {
        console.log(err)
        if(err.error="User already exist") alert('User Already Exists');
        this._router.navigate(['']);
       }
       )
   }
  

  GoToLogin() {
    this._router.navigate(['']);
  }
  get name() {
    return this.UserObj.controls['Username'];
  }
  get email() {
    return this.UserObj.controls['Email'];
  }
  get password() {
    return this.UserObj.controls['Password'];
  }
  get image() {
    return this.UserObj.controls['Image'];
  }
  customPasswordValidator( control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;

    if (!/^[A-Z]/.test(password)) {
      return { invalidStartChar: true };
    }
    if (!/[1-9]/.test(password)) {
      return { noNumber: true };
    }
    if (!/[!@#$%^&*()]/.test(password)) {
      return { noSpecialSymbol: true };
    }

    return null;
  }
}
