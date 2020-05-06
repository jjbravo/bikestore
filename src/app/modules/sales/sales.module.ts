import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SalesListComponent } from './sales-list/sales-list.component';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [CatalogueComponent, DetailCarComponent, SalesListComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormsModule
  ]
})
export class SalesModule { }
