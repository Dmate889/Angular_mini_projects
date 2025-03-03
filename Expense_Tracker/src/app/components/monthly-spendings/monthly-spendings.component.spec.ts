import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySpendingsComponent } from './monthly-spendings.component';

describe('MonthlySpendingsComponent', () => {
  let component: MonthlySpendingsComponent;
  let fixture: ComponentFixture<MonthlySpendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlySpendingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySpendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
