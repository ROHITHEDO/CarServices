import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { routingComponent } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './account.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './services/auth.guard';
import { AddCarComponent } from './add-car/add-car.component';
import { SeeBookCarComponent } from './see-book-car/see-book-car.component';
import { BookCarRideComponent } from './book-car-ride/book-car-ride.component';
import { UserBookedCarsComponent } from './user-booked-cars/user-booked-cars.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgxStripeModule } from 'ngx-stripe';
import { CheckOutSessionComponent } from './check-out-session/check-out-session.component';
import { DropdownModule } from "primeng/dropdown";
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    routingComponent,
    SignUpComponent,
    AddCarComponent,
    SeeBookCarComponent,
    BookCarRideComponent,
    UserBookedCarsComponent,
    UnauthorizedComponent,
    CheckOutSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, ToastModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    DropdownModule,
    NgxStripeModule
  ],
  providers: [AuthGuard,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
