import { AbstractControl, FormGroup } from "@angular/forms";


export function passwordValidator(control:AbstractControl):{[key:string]:any}|null
{
       const password=control.get('Password')
       const confirmPassword=control.get('ConfirmPassword')
       if(password?.pristine|| confirmPassword?.pristine)
       {
        return null;
       }
       return password && confirmPassword && password.value !== confirmPassword.value ? {'Mismatch':true} : null
}