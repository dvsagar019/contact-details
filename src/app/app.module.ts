import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsListComponent } from './space-module/contact-details-list/contact-details-list.component';
import { ContactDetailsFormComponent } from './space-module/contact-details-form/contact-details-form.component';
import { AgGridModule } from 'ag-grid-angular';
import { CellRendererGridComponent } from './space-module/cell-renderer/cell-renderer-grid/cell-renderer-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsListComponent,
    ContactDetailsFormComponent,
    CellRendererGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([AppComponent])
  ],
  providers: [],
  // entryComponents: [CellRendererGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
