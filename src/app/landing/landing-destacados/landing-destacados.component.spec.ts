import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDestacadosComponent } from './landing-destacados.component';

describe('LandingDestacadosComponent', () => {
  let component: LandingDestacadosComponent;
  let fixture: ComponentFixture<LandingDestacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingDestacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
