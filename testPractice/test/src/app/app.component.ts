import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor(private _router:Router,private _service:AccountService){
        this._service.displayButton.subscribe((res)=>{
          debugger;
            this.log=res
        })
      
  }
log:any
  LogOut(){
      
      this._router.navigate([''])
      localStorage.clear();
  }
}
