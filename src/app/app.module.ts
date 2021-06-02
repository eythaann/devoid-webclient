import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { HomeComponent } from './views/home/home.component';
import { StoreComponent } from './views/store/store.component';
import { SupportComponent } from './views/support/support.component';
import { ProductComponent } from './views/product/product.component';
import { Page404Component } from './views/page404/page404.component';
import { CarComponent } from './views/car/car.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PointsComponent } from './views/points/points.component';
import { RedesComponent } from './views/redes/redes.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { UserComponent } from './views/user/user.component';
import { CartDeleteConfirmComponent } from './layouts/cart-delete-confirm/cart-delete-confirm.component';
import { ProductConfirmComponent } from './layouts/product-confirm/product-confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './views/payment/payment.component';
import { AfiliadosComponent } from './views/afiliados/afiliados.component';
import { MetaService } from './services/meta.service';


@NgModule({
  declarations: [
    AppComponent,
    /**layaouts */
    HeaderComponent,
    FooterComponent,
    CartDeleteConfirmComponent,
    ProductConfirmComponent,
    /**views */
    HomeComponent,
    StoreComponent,
    SupportComponent,
    ProductComponent,
    PaymentComponent,
    AfiliadosComponent,
    CarComponent,
    LoginComponent,
    RegisterComponent,
    PointsComponent,
    RedesComponent,
    ResetPasswordComponent,
    UserComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatBadgeModule,
    ReactiveFormsModule,
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
