import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { AfiliadosComponent } from './views/afiliados/afiliados.component';
import { CarComponent } from './views/car/car.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { OrdersComponent } from './views/orders/orders.component';
import { Page404Component } from './views/page404/page404.component';
import { PaymentComponent } from './views/payment/payment.component';
import { PointsComponent } from './views/points/points.component';
import { ProductComponent } from './views/product/product.component';
import { RedesComponent } from './views/redes/redes.component';
import { RegisterComponent } from './views/register/register.component';
//import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { StoreComponent } from './views/store/store.component';
import { SupportComponent } from './views/support/support.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'register', component: RegisterComponent
  },

  {
    path: 'store', component: StoreComponent
  },

  {
    path: 'store/:rutpro', component: ProductComponent
  },

  {
    path: 'cart', component: CarComponent
  },

  {
    path: 'afiliados', component: AfiliadosComponent
  },

  {
    path: 'redes', component: RedesComponent
  },

  {
    path: 'points', component: PointsComponent
  },

  {
    path: 'payment', component: PaymentComponent
  },

  {
    path: 'support', component: SupportComponent
  },
 // {
  //  path: 'reset-password', component: ResetPasswordComponent
 // },
  {
    path: 'user/orders', component: OrdersComponent
  },
  {
    path: '**', component: Page404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'enabled', 
    preloadingStrategy: PreloadAllModules, 
    initialNavigation: 'enabled' 
  })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
