import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login/login.component.html',
  styleUrl: './login/login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  apiUrl = 'http://localhost:8080/api/users/login';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  onLogin(): void {
    const credentials = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post(this.apiUrl, credentials, { responseType: 'text' })
      .subscribe({
        next: (token: string) => {
          if (token && !token.startsWith('Erro')) {
            //Salva o token no localStorage
            localStorage.setItem('token', token);
            alert('Login made successfully!');
            this.router.navigate(['/dashboard']); //e redireciona para o dashboard
          } else {
            alert(token || 'E-mail oder password nicht korrekt.');
          }
        },
        error: (error) => {
          console.error('Error connecting to API:', error);
          alert('Nicht möglich, eine Verbindung zum Server herzustellen.');
        },
      });
  }

  goToRegister(): void {
    //se no futuro houver uma tela de registro, redireciona para ela
  }
}
