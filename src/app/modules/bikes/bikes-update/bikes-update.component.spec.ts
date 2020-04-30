import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesUpdateComponent } from './bikes-update.component';

describe('BikesUpdateComponent', () => {
  let component: BikesUpdateComponent;
  let fixture: ComponentFixture<BikesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
