import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { DefaultColorOnEventDirective } from './new-directive/color.directive';
import { NewEmployeeComponent } from './new-employee/newemployee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpservicesService } from './empservices.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DefaultColorOnEventDirective,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmpservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
