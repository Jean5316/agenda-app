import { Component, signal } from '@angular/core';
//import { ClientesList } from "./pages/home/components/clientes-list/clientes-list";
//import { ClientesForm } from "./pages/home/components/clientes-form/clientes-form";
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './pages/home/home-module';
//Usando Rotas nao é necessario chamar components no HTML do app

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda-app');
}
