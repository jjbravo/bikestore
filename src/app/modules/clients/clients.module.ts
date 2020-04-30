import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { ClientsMainComponent } from './clients-main/clients-main.component';


@NgModule({
  declarations: [ClientsListComponent, ClientsCreateComponent, ClientsMainComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
