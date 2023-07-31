import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalDraggableModule } from 'ngb-modal-draggable';
import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ResumeComponent } from './resume/resume.component';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  declarations: [AppComponent, ResumeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalDraggableModule,
    NgbModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AgGridModule.forRoot()
  ],
  providers: [], // interceptors, auth config goes here
  bootstrap: [AppComponent],
})
export class AppModule {}
