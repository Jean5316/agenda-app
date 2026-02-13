import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cliente{
  id: number,
  nome: string,
  telefone: string,
  ativo: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:5000/Contato'

  constructor(private http: HttpClient){

  }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiUrl}/listarContatos`)
  }

  buscarPorId(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/ObterPorId/${id}`)
  }

  buscarPorNome(nome: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiUrl}/ObterPorNome?nome=${nome}`)
  }

  criar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiUrl}/CriarNovoContato`, cliente)
  }

  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put(`${this.apiUrl}/AtualizarContato/${cliente.id}`, cliente)
  }

  excluir(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/DeletarContato/${id}`)
  }
  
}
