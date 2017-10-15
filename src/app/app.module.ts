import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/app.routing';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import  { NavbarComponent } from './shared/navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { BlogDetailsComponent } from './blogDetails/blogDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
