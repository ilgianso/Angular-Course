import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

@NgModule({
  declarations: [UsersListComponent, UsersDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
