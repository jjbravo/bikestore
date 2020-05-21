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


@NgModule({
  declarations: [CatalogueComponent, DetailCarComponent, SalesListComponent, SalesMainComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormsModule,
    DialogModule
  ]
})
export class SalesModule { }
