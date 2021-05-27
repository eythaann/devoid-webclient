import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfiliadosRoutingModule } from './afiliados-routing.module';
import { AfiliadosComponent } from './afiliados.component';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


@NgModule({
  declarations: [
    AfiliadosComponent,
  ],
  imports: [
    CommonModule,
    AfiliadosRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class AfiliadosModule { }
