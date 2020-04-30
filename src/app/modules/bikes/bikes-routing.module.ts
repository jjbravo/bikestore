import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikesCreateComponent } from './bikes-create/bikes-create.component';
import { BikesViewComponent } from './bikes-view/bikes-view.component';
import { BikesUpdateComponent } from './bikes-update/bikes-update.component';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {
    path: '',
    component: BikesMainComponent,
    children: [
      {
        path: '',
        component: BikesListComponent
      },
      {
        path: 'bikes-create',
        component: BikesCreateComponent
      },
      {
        path: 'bikes-update/:id',
        component: BikesUpdateComponent
      },
      {
        path: 'bikes-view',
        component: BikesViewComponent
      },
      {
        path: 'comments',
        component: CommentsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
