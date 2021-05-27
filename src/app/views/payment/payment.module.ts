import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { PaymentComponent } from './payment.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class PaymentModule { }
