import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { ClientsMainComponent } from './clients-main/clients-main.component';
import { ViewWithSalesComponent } from './view-with-sales/view-with-sales.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesModule } from '../sales/sales.module';


@NgModule({
  declarations: [ClientsListComponent, ClientsCreateComponent, ClientsMainComponent, ViewWithSalesComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    SalesModule
  ]
})
export class ClientsModule { }
