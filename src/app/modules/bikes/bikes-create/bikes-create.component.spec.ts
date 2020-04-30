import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesCreateComponent } from './bikes-create.component';

describe('BikesCreateComponent', () => {
  let component: BikesCreateComponent;
  let fixture: ComponentFixture<BikesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
