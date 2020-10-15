import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {TablePaginationExample} from './table-pagination-example';
import { SelectComponent } from './select.component'
import { AppService } from './app.service';
import { OrderModule } from 'ngx-order-pipe';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    TablePaginationExample
  ],
  imports: [
    BrowserModule,
    OrderModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
