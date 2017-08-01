import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos.component';
import { InscricaoComponent } from "app/usuario/inscricao/inscricao.component";
import { LoginComponent } from "app/usuario/login/login.component";
import { AdicionarEventoComponent } from "app/eventos/adicionar-evento/adicionar-evento.component";
import { AcessoNegadoComponent } from "app/shared/acesso-negado/acesso-negado.component";
import { MeusEventosComponent } from "app/eventos/meus-eventos/meus-eventos.component";

import { AuthService } from "app/shared/auth-service";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'proximos-eventos', component: ListaEventosComponent },
    { path: 'inscricao', component: InscricaoComponent },
    { path: 'entrar', component: LoginComponent },
    { path: 'novo-evento', canActivate: [AuthService], component: AdicionarEventoComponent, data: [{ claim: { nome: 'Eventos', valor: 'Gravar'}}]},
    { path: 'meus-eventos', canActivate: [AuthService], component: MeusEventosComponent },
    { path: 'acesso-negado', component: AcessoNegadoComponent }
]