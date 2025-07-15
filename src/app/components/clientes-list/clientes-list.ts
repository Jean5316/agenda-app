import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cliente, ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-clientes-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css'
})
export class ClientesList {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService){

  }

  ngOnInit(){
    this.clienteService.listar().subscribe(data => this.clientes = data)
  }

  excluir(id: number){
    this.clienteService.excluir(id).subscribe(
      () => {
        this.clientes = this.clientes.filter(c => c.id !== id);
      }
    )
  }

}
