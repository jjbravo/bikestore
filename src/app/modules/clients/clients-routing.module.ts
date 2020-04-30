import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsMainComponent } from './clients-main/clients-main.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsCreateComponent } from './clients-create/clients-create.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
