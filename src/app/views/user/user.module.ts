import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class UserModule { }
