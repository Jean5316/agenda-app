import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  nome: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.nome, this.senha).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/clientes']);
      },
      error: (error) => {
        console.error('Erro ao fazer login:', error);
        alert('Falha no login. Verifique suas credenciais e tente novamente.');
      }
    })

  }
}
