import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerWindowComponent } from './tracker-window.component';

describe('TrackerWindowComponent', () => {
  let component: TrackerWindowComponent;
  let fixture: ComponentFixture<TrackerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackerWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
