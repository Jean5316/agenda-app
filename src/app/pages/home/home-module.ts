import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services/clienteService';
import { ClientesForm } from './components/clientes-form/clientes-form';
import { ClientesList } from './components/clientes-list/clientes-list';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClientesForm,
    ClientesList
  ],
  exports: [
    ClientesForm,
    ClientesList
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ClienteService,
  ]
})
export class HomeModule { }
