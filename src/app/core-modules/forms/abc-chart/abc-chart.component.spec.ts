import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcChartComponent } from './abc-chart.component';

describe('AbcChartComponent', () => {
  let component: AbcChartComponent;
  let fixture: ComponentFixture<AbcChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
