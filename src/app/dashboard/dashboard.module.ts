import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SalesModule } from '../modules/sales/sales.module';
import { BikesModule } from '../modules/bikes/bikes.module';


@NgModule({
  declarations: [NavbarComponent, AsideComponent, MainDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SalesModule,
    BikesModule
  ]
})
export class DashboardModule { }
