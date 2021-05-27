import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { HeaderModule } from 'src/app/layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';


@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    HeaderModule,
    FooterModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers:[
    ApiService
  ],
})
export class StoreModule { }
