import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { AdminMenuComponent } from './adminMenu/adminMenu.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BlogAdminComponent } from './blogAdmin/blog-admin.component';

import { UserService } from './adminShared/user.service';
import { BlogAdminService } from './adminShared/blog-admin.service';
import { BlogAddComponent } from './blogAdd/blod-add.component';

import { TruncatePipe } from './adminShared/trunc.pipe';

const AdminRoutes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'blog-admin', component: BlogAdminComponent, canActivate: [UserService]},
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
    RouterModule,
    TruncatePipe
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    SigninComponent,
    SignupComponent,
    BlogAdminComponent,
    BlogAddComponent,
    TruncatePipe
  ],
  providers: [
    UserService,
    BlogAdminService
  ]
})

export class AdminModule {}

