import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedesRoutingModule } from './redes-routing.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { RedesComponent } from './redes.component';


@NgModule({
  declarations: [RedesComponent],
  imports: [
    CommonModule,
    RedesRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class RedesModule { }
