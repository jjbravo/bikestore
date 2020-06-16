import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWithSalesComponent } from './view-with-sales.component';

describe('ViewWithSalesComponent', () => {
  let component: ViewWithSalesComponent;
  let fixture: ComponentFixture<ViewWithSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWithSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWithSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
