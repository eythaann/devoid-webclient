import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./views/home/home.module').then((m) => m.HomeModule);
    },
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () => {
      return import('./views/login/login.module').then((m) => m.LoginModule);
    },
  },

  {
    path: 'register',
    loadChildren: () => {
      return import('./views/register/register.module').then(
        (m) => m.RegisterModule
      );
    },
  },

  {
    path: 'store',
    loadChildren: () => {
      return import('./views/store/store.module').then((m) => m.StoreModule);
    },
  },

  {
    path: 'store/:rutpro',
    loadChildren: () => {
      return import('./views/product/product.module').then(
        (m) => m.ProductModule
      );
    },
  },

  {
    path: 'cart',
    loadChildren: () => {
      return import('./views/car/car.module').then((m) => m.CarModule);
    },
  },

  {
    path: 'afiliados',
    loadChildren: () => {
      return import('./views/afiliados/afiliados.module').then(
        (m) => m.AfiliadosModule
      );
    },
  },

  {
    path: 'redes',
    loadChildren: () => {
      return import('./views/redes/redes.module').then((m) => m.RedesModule);
    },
  },

  {
    path: 'points',
    loadChildren: () => {
      return import('./views/points/points.module').then((m) => m.PointsModule);
    },
  },

  {
    path: 'payment',
    loadChildren: () => {
      return import('./views/payment/payment.module').then(
        (m) => m.PaymentModule
      );
    },
  },

  {
    path: 'support',
    loadChildren: () => {
      return import('./views/support/support.module').then(
        (m) => m.SupportModule
      );
    },
  },
  {
    path: 'reset-password',
    loadChildren: () => {
      return import('./views/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordModule
      );
    },
  },

  {
    path: '**',
    loadChildren: () => {
      return import('./views/page404/page404.module').then(
        (m) => m.Page404Module
      );
    },
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
