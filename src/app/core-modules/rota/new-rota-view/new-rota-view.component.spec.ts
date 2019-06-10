import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRotaViewComponent } from './new-rota-view.component';

describe('NewRotaViewComponent', () => {
  let component: NewRotaViewComponent;
  let fixture: ComponentFixture<NewRotaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRotaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRotaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
