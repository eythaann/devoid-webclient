import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsRoutingModule } from './points-routing.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { PointsComponent } from './points.component';


@NgModule({
  declarations: [PointsComponent],
  imports: [
    CommonModule,
    PointsRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class PointsModule { }
