import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CatalogueComponent } from '../modules/sales/catalogue/catalogue.component';
import { BikesListComponent } from '../modules/bikes/bikes-list/bikes-list.component';
import { BikesUpdateComponent } from '../modules/bikes/bikes-update/bikes-update.component';
import { UserRouteAccessService } from '../auth/user-route-access.service';
import { Authority } from '../auth/auth-shared/constants/authority.constants';


const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      {
        path: 'clients',
        data: {
          authorities: [Authority.ROLE_CLIENT, Authority.ROLE_ADMIN]
        },
        canActivate: [UserRouteAccessService],
        loadChildren: () => import('../modules/clients/clients.module')
        .then(m => m.ClientsModule)
      },
      {
        path: 'sales',
        data: {
          authorities: [Authority.ROLE_ADMIN]
        },
        canActivate: [UserRouteAccessService],
        loadChildren: () => import('../modules/sales/sales.module')
        .then(m => m.SalesModule)
      },
      {
        path: 'bikes',
        data: {
          authorities: [Authority.ROLE_CLIENT, Authority.ROLE_ADMIN]
        },
        canActivate: [UserRouteAccessService],
        loadChildren: () => import('../modules/bikes/bikes.module')
        .then(m => m.BikesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
