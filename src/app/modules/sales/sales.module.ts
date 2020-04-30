import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesListComponent } from './sales-list/sales-list.component';


@NgModule({
  declarations: [CatalogueComponent, DetailCarComponent, SalesListComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SalesModule { }
