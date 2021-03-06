import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import { UserRouteAccessService } from './auth/user-route-access.service';
import { Authority } from './auth/auth-shared/constants/authority.constants';
import { ListUserComponent } from './components/list-user/list-user.component';


const routes: Routes = [
  {
    path: 'dashboard',
    data: {
      authorities: [Authority.ROLE_ADMIN, Authority.ROLE_USER, Authority.ROLE_CLIENT]
    },
    canActivate: [UserRouteAccessService],
    loadChildren: () => import('./dashboard/dashboard.module')
    .then(m => m.DashboardModule)
  },
/*  {
    path: 'user-count',
    component: ListUserComponent
  },*/
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'accessdenied',
    component: AccessDeniedComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
