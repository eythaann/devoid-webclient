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
import { MatButtonModule } from '@angular/material/button';
import { CartDeleteConfirmComponent } from 'src/app/layouts/cart-delete-confirm/cart-delete-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CarComponent,
    CartDeleteConfirmComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    HeaderModule,
    FooterModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    ApiService
  ],
  entryComponents: [CartDeleteConfirmComponent]
})
export class CarModule { }
