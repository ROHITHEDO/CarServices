import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutSessionComponent } from './check-out-session.component';

describe('CheckOutSessionComponent', () => {
  let component: CheckOutSessionComponent;
  let fixture: ComponentFixture<CheckOutSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckOutSessionComponent]
    });
    fixture = TestBed.createComponent(CheckOutSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
