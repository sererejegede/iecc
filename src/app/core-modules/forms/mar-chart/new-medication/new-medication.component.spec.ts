import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicationComponent } from './new-medication.component';

describe('NewMedicationComponent', () => {
  let component: NewMedicationComponent;
  let fixture: ComponentFixture<NewMedicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
