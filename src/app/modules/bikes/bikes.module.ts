import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikesCreateComponent } from './bikes-create/bikes-create.component';
import { BikesUpdateComponent } from './bikes-update/bikes-update.component';
import { BikesViewComponent } from './bikes-view/bikes-view.component';
import { BikesRoutingModule } from './bikes-routing.module';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import {PaginatorModule} from 'primeng/paginator';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faUnlock,
  faLock
 } from '@fortawesome/free-solid-svg-icons';



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
    FormsModule,
    FontAwesomeModule,
    BikesRoutingModule,
    ReactiveFormsModule, // Importar para usar formularios reactivos de angular con formBuilder
    InputSwitchModule,
    PaginatorModule
  ]
})
export class BikesModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faUnlock, faLock);
  }
}
