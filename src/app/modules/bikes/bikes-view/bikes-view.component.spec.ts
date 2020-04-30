import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesViewComponent } from './bikes-view.component';

describe('BikesViewComponent', () => {
  let component: BikesViewComponent;
  let fixture: ComponentFixture<BikesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
