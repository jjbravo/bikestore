import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CatalogueComponent } from '../modules/sales/catalogue/catalogue.component';
import { BikesListComponent } from '../modules/bikes/bikes-list/bikes-list.component';


const routes: Routes = [
  {
    path:'',
    component: MainDashboardComponent,
    children: [
      {
        path: 'catalogo',
        component: CatalogueComponent
      },
      {
        path:'bikes-list',
        component: BikesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
