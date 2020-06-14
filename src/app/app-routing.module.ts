import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
    .then(m => m.DashboardModule)
  },
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
