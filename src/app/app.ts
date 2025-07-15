import { Component, signal } from '@angular/core';
import { ClientesList } from "./components/clientes-list/clientes-list";
import { ClientesForm } from "./components/clientes-form/clientes-form";
import { RouterOutlet } from '@angular/router';
//Usando Rotas nao é necessario chamar components no HTML do app
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda-app');
}
