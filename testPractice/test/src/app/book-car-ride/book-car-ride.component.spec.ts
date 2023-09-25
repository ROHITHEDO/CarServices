import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCarRideComponent } from './book-car-ride.component';

describe('BookCarRideComponent', () => {
  let component: BookCarRideComponent;
  let fixture: ComponentFixture<BookCarRideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCarRideComponent]
    });
    fixture = TestBed.createComponent(BookCarRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
