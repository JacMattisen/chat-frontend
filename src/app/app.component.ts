import { Component } from '@angular/core';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardLayoutComponent],
  template: `<app-dashboard-layout></app-dashboard-layout>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chat-frontend';
}
