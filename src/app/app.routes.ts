import { Routes, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

// Guard para proteger a rota do dashboard
const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return true; // Deixa passar se o token existir
  } else {
    // Se não tiver token, expulsa de volta para o login
    router.navigate(['/login']);
    return false;
  }
};

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
  },

  { path: '**', redirectTo: 'login' },
];
