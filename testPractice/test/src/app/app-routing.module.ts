import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth.guard';
import { AddCarComponent } from './add-car/add-car.component';
import { SeeBookCarComponent } from './see-book-car/see-book-car.component';
import { BookCarRideComponent } from './book-car-ride/book-car-ride.component';
import { UserBookedCarsComponent } from './user-booked-cars/user-booked-cars.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CheckOutSessionComponent } from './check-out-session/check-out-session.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'Admin',component:AdminComponent,canActivate:[AuthGuard]},
  {path:'Add',component:AddCarComponent,canActivate:[AuthGuard],data: {expectedRole: "Admin" }},
  {path:'BookedCars',component:SeeBookCarComponent,canActivate:[AuthGuard],data: {expectedRole: "Admin" }},
  {path:'BookForRide/:id',component:BookCarRideComponent,canActivate:[AuthGuard],data: {expectedRole: "User" }},
  {path:'MyBookedCars',component:UserBookedCarsComponent,canActivate:[AuthGuard],data: {expectedRole: "User" }},
  {path:'ProceedToPay',component:CheckOutSessionComponent,canActivate:[AuthGuard],data: {expectedRole: "User" }},
  {path:'notaccess',component:UnauthorizedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,SignUpComponent,AdminComponent,SeeBookCarComponent,BookCarRideComponent]