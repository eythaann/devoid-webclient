import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { ProductComponent } from './product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MatButtonModule } from '@angular/material/button';
import { ProductConfirmComponent } from 'src/app/layouts/product-confirm/product-confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';


@NgModule({
  declarations: [
    ProductComponent,
    ProductConfirmComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HeaderModule,
    FooterModule,
    MatDialogModule,
    NgxImageZoomModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    ApiService
  ],
  entryComponents: [ProductConfirmComponent]
})
export class ProductModule { }
