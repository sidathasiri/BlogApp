import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { ErrorComponent } from './../error/error.component';
import { BlogDetailsComponent } from '../blogDetails/blogDetails.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'post/:id', component: BlogDetailsComponent},
      {path: '**', component: ErrorComponent}
    ])
    ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
