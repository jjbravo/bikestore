import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SalesListComponent } from './sales-list/sales-list.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { SalesMainComponent } from './sales-main/sales-main.component';
import {DialogModule} from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { CarComponent } from './car/car.component';


@NgModule({
  declarations: [CatalogueComponent, DetailCarComponent, SalesListComponent, SalesMainComponent, NewSaleComponent, CarComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormsModule,
    PaginatorModule,
    DialogModule
  ],
  exports: [
    NewSaleComponent
  ]
})
export class SalesModule { }
