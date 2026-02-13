import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente, ClienteService } from '../../services/clienteService';

@Component({
  selector: 'app-clientes-list',
  // imports: [CommonModule, RouterModule],
  standalone:false,
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css'
})
export class ClientesList {
  clientes: Cliente[] = [];// Variável para armazenar a lista de clientes
  nome: string = '';// Variável para armazenar o nome digitado no campo de busca
  contatosFiltrados: Cliente[] = [];// Variável para armazenar os contatos filtrados com base no nome digitado


  constructor(private clienteService: ClienteService, private router: Router) {

  }

  ngOnInit(){
    this.listar();
  }

  listar(){
    this.clienteService.listar().subscribe(data => this.clientes = data)
  }

  buscarPorNome(){
    
    if(this.nome){
      this.clienteService.buscarPorNome(this.nome).subscribe(data => this.clientes = data)
    }
  }  
  excluir(id: number){
    this.clienteService.excluir(id).subscribe(
      () => {
        this.clientes = this.clientes.filter(c => c.id !== id);
      }
    )
  }

}
