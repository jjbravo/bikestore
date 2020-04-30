import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingMainComponent } from './landing-main/landing-main.component';


const routes: Routes = [
  {
    path: '',
    component: LandingMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
