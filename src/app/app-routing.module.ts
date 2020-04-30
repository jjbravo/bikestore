import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'bikes',
    loadChildren: () => import('./modules/bikes/bikes.module')
    .then(m => m.BikesModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./modules/clients/clients.module')
    .then(m => m.ClientsModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module')
    .then(m => m.LandingModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./modules/sales/sales.module')
    .then(m => m.SalesModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
