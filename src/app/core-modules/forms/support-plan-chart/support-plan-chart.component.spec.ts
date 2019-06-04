import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPlanChartComponent } from './support-plan-chart.component';

describe('SupportPlanChartComponent', () => {
  let component: SupportPlanChartComponent;
  let fixture: ComponentFixture<SupportPlanChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportPlanChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPlanChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
