import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';


@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    HeaderModule,
    FooterModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    ApiService
  ],
})
export class CarModule { }
