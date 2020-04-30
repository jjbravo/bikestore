import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { LandingContactComponent } from './landing-contact/landing-contact.component';
import { LandingDestacadosComponent } from './landing-destacados/landing-destacados.component';


@NgModule({
  declarations: [LandingMainComponent, LandingHeaderComponent, LandingFooterComponent, LandingSliderComponent, LandingContactComponent, LandingDestacadosComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
