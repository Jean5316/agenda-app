import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
private apiUrl = 'http://localhost:5000/Auth/login';

constructor(private http: HttpClient) {}

  login(nome: string, senha: string) {
  return this.http.post<any>(this.apiUrl, { nome, senha });
  }
}
