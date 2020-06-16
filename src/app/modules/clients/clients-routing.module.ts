import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsMainComponent } from './clients-main/clients-main.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { ViewWithSalesComponent } from './view-with-sales/view-with-sales.component';


const routes: Routes = [
  {
    path: '',
    component: ClientsMainComponent,
    children: [
      {
        path: 'clients-list',
        component: ClientsListComponent
      },
      {
        path: 'clients-create',
        component: ClientsCreateComponent
      }
    ]
  },
  {
    path: 'view-with-sales',
    component: ViewWithSalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
