import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormModalComponent } from './form-modal/form-modal.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalDraggableModule } from 'ngb-modal-draggable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectsComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
