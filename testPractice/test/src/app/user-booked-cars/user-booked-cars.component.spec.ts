import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookedCarsComponent } from './user-booked-cars.component';

describe('UserBookedCarsComponent', () => {
  let component: UserBookedCarsComponent;
  let fixture: ComponentFixture<UserBookedCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookedCarsComponent]
    });
    fixture = TestBed.createComponent(UserBookedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
