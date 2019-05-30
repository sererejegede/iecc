import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaDetailsComponent } from './rota-details.component';

describe('RotaDetailsComponent', () => {
  let component: RotaDetailsComponent;
  let fixture: ComponentFixture<RotaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
