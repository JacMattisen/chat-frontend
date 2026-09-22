import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToChatDashboard() {
    this.router.navigate(['/chat-dashboard']);
  }

  logout() {
    // Remove o token do navegador
    localStorage.removeItem('token');
    // Manda de volta para o login
    this.router.navigate(['/login']);
  }
}
