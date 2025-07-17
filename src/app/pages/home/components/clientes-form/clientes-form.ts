import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente, ClienteService } from '../../services/clienteService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  // imports: [CommonModule, FormsModule],
  standalone:false,
  templateUrl: './clientes-form.html',
  styleUrl: './clientes-form.css'
})
export class ClientesForm {
  cliente: Cliente = {
    id: 0,
    nome: '',
    telefone: '',
    ativo: false
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id){
      this.clienteService.buscarPorId(id).subscribe(data => this.cliente = data)
    }
  }

  salvar(){
    console.log("Clicou em salvar")
    if(this.cliente.id){
      this.clienteService.atualizar(this.cliente).subscribe(
        () => this.voltar()
      )
    }else{
      this.clienteService.criar(this.cliente).subscribe(
        () => this.voltar()
      )
    }
  }

  voltar(){
      this.router.navigate(['/clientes'])
    }

}
