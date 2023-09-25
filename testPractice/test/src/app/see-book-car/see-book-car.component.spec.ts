import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeBookCarComponent } from './see-book-car.component';

describe('SeeBookCarComponent', () => {
  let component: SeeBookCarComponent;
  let fixture: ComponentFixture<SeeBookCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeBookCarComponent]
    });
    fixture = TestBed.createComponent(SeeBookCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
