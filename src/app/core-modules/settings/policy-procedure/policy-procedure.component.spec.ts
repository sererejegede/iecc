import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyProcedureComponent } from './policy-procedure.component';

describe('PolicyProcedureComponent', () => {
  let component: PolicyProcedureComponent;
  let fixture: ComponentFixture<PolicyProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
