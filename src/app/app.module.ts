import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MedicineComponent } from './medicine/medicine.component';
import { MedicineService } from './medicine.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MedicineComponent } from './medicine/medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddingComponent } from './adding/adding.component';



@NgModule({
  declarations: [
    AppComponent,    
    MedicineComponent, AddMedicineComponent, AddingComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
