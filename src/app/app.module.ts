import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcronymsComponent } from './acronyms/acronyms.component';
import { AddNewComponent } from './add-new/add-new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, 
	MatTabsModule, MatProgressSpinnerModule, MatDividerModule, MatFormFieldModule, 
	MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
	AppComponent,
	AcronymsComponent,
	AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	MatButtonModule,
    MatToolbarModule,
    MatCardModule,
	MatGridListModule,
	MatTabsModule,
	MatProgressSpinnerModule,
	MatDividerModule,
	MatFormFieldModule,
	MatInputModule,
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
