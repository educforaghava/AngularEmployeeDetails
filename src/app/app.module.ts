import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { DefaultColorOnEventDirective } from './new-directive/color.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DefaultColorOnEventDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
