import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { AdminMenuComponent } from './adminMenu/adminMenu.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { UserService } from './adminShared/user.service';
import { BlogAdminService } from './adminShared/blog-admin.service';

const AdminRoutes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
      {path: '', component: AdminMenuComponent, canActivate: [UserService]}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    SigninComponent,
    SignupComponent,
  ],
  providers: [
    UserService,
    BlogAdminService
  ]
})

export class AdminModule {}

