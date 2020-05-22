import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SalesModule } from '../modules/sales/sales.module';
import { BikesModule } from '../modules/bikes/bikes.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faStore, faBicycle } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [NavbarComponent, AsideComponent, MainDashboardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    SalesModule,
    BikesModule
  ]
})
export class DashboardModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
    library.addIcons(faStore);
    library.addIcons(faBicycle);
  }
 }
