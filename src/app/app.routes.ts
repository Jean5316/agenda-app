import { Routes } from '@angular/router';
import { ClientesList } from './components/clientes-list/clientes-list';
import { ClientesForm } from './components/clientes-form/clientes-form';

export const routes: Routes = [
    {path: '', redirectTo: 'clientes', pathMatch: 'full'},
    {path: 'clientes', component: ClientesList},
    {path: 'clientes/novo', component: ClientesForm},
    {path: 'clientes/editar/:id', component: ClientesForm},
    
];
