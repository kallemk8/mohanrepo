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
import {AuthGuard} from './auth-guard.service';
import { Routes, RouterState, Router, RouterModule } from '@angular/router';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { Fromgroup } from './fromgroup.component';
const appRoot: Routes = [
  {path: "table", component: TablePaginationExample},
  {path: "from", component: Fromgroup},
 
];
@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    TablePaginationExample,
    Fromgroup
  ],
  imports: [
    BrowserModule,
    OrderModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule,
    RouterModule.forRoot(appRoot, { useHash: true })
  ],
  providers: [AppService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
