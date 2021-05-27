import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from 'src/app/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HeaderModule,
    FooterModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    ApiService
  ],
})
export class RegisterModule { }
