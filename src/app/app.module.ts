import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcronymsComponent } from './acronyms/acronyms.component';
import { AddNewComponent } from './add-new/add-new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, 
	MatTabsModule, MatProgressSpinnerModule, MatDividerModule, MatFormFieldModule, 
	MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
	  AppComponent,
	  AcronymsComponent,
	  AddNewComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		OrderModule,
		Ng2SearchPipeModule,
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
	  MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
