import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikesCreateComponent } from './bikes-create/bikes-create.component';
import { BikesUpdateComponent } from './bikes-update/bikes-update.component';
import { BikesViewComponent } from './bikes-view/bikes-view.component';
import { BikesRoutingModule } from './bikes-routing.module';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
// import { InputSwitchModule } from 'primeng/inputswitch';



@NgModule({
  declarations: [
      BikesListComponent,
      BikesCreateComponent,
      BikesUpdateComponent,
      BikesViewComponent,
      BikesMainComponent,
      CommentsComponent,
      ],
  imports: [
    CommonModule,
    BikesRoutingModule,
    ReactiveFormsModule, // Importar para usar formularios reactivos de angular con formBuilder
    // InputSwitchModule
  ]
})
export class BikesModule { }
