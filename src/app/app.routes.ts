import { Routes } from '@angular/router';
import { ClientesList } from './pages/home/components/clientes-list/clientes-list';
import { ClientesForm } from './pages/home/components/clientes-form/clientes-form';
import { Login } from './pages/home/components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: 'login', component: Login },
    {path: 'clientes', component: ClientesList, canActivate: [authGuard]},
    {path: 'clientes/novo', component: ClientesForm, canActivate: [authGuard]},
    {path: 'clientes/editar/:id', component: ClientesForm, canActivate: [authGuard]},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    
];
