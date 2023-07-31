import { EducationComponent } from './education.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { AgGridModule } from '@ag-grid-community/angular';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    AgGridModule,
    IonicModule
  ]
})
export class EducationModule { }
