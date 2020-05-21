import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesMainComponent } from './sales-main/sales-main.component';


const routes: Routes = [
  {
    path: '',
    component: SalesMainComponent,
    children: [
      {
        path: '',
        component: CatalogueComponent
      },
      {
        path: 'detail-car',
        component: DetailCarComponent
      },
      {
        path: 'sales-list',
        component: SalesListComponent
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
