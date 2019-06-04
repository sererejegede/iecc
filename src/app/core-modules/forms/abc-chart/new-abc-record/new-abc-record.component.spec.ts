import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAbcRecordComponent } from './new-abc-record.component';

describe('NewAbcRecordComponent', () => {
  let component: NewAbcRecordComponent;
  let fixture: ComponentFixture<NewAbcRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAbcRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAbcRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
