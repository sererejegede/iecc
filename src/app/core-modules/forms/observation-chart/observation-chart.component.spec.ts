import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationChartComponent } from './observation-chart.component';

describe('ObservationChartComponent', () => {
  let component: ObservationChartComponent;
  let fixture: ComponentFixture<ObservationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
