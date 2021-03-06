import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SalesModule } from '../modules/sales/sales.module';
import { BikesModule } from '../modules/bikes/bikes.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faStore,
  faBicycle,
  faSearch,
  faAngleDoubleLeft,
  faAngleDoubleRight
 } from '@fortawesome/free-solid-svg-icons';
import { SharedAuthModule } from '../auth/auth-shared/auth-shared.module';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent, MainDashboardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    SalesModule,
    BikesModule,
    SharedAuthModule
  ]
})
export class DashboardModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
    library.addIcons(faStore);
    library.addIcons(faBicycle);
    library.addIcons(faSearch);
    library.addIcons(faAngleDoubleLeft);
    library.addIcons(faAngleDoubleRight);
  }
 }
