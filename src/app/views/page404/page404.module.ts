import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404RoutingModule } from './page404-routing.module';
import { Page404Component } from './page404.component';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    Page404Component,
  ],
  imports: [
    CommonModule,
    Page404RoutingModule,
    HeaderModule,
    FooterModule,
    MatButtonModule,
  ],
})
export class Page404Module { }
