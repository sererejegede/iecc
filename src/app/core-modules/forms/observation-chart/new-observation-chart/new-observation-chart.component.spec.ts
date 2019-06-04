import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObservationChartComponent } from './new-observation-chart.component';

describe('NewObservationChartComponent', () => {
  let component: NewObservationChartComponent;
  let fixture: ComponentFixture<NewObservationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewObservationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewObservationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
