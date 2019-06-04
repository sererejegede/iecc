import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarChartComponent } from './mar-chart.component';

describe('MarChartComponent', () => {
  let component: MarChartComponent;
  let fixture: ComponentFixture<MarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
