import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesMainComponent } from './sales-main/sales-main.component';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { Authority } from 'src/app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'src/app/auth/user-route-access.service';


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
        data: {
          authorities: [Authority.CLIENT, Authority.ADMIN]
        },
        canActivate: [UserRouteAccessService],
        component: SalesListComponent
      }
    ]
  },
  {
    path: 'new-sale',
    component: NewSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
