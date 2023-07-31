import { IonicModule } from '@ionic/angular';
import { SkillsComponent } from './skills.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { NgbModule } from '_node_modules/@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    IonicModule,
    NgbModule
  ]
})
export class SkillsModule { }
