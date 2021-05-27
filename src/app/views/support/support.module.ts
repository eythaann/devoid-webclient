import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SupportComponent } from './support.component';


@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class SupportModule { }
