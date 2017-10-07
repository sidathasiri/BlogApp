import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import  { NavbarComponent } from './shared/navbar/navbar.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
