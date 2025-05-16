import { Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { OrdersComponent } from './components/orders/orders.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [() => {
      const authService = inject(AuthService);
      const router = inject(Router);
      if (authService.isAuthenticated()) {
        return true;
      }
      return router.createUrlTree(['/signin']);
    }],
  },
  { path: '**', redirectTo: '/orders' },
];
