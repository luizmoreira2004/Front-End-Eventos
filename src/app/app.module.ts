import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { getDOM } from "@angular/platform-browser/src/dom/dom_adapter";

// bootstrap
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { CarouselModule } from 'ng2-bootstrap/carousel';

// shared components
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainPrincipalComponent } from './shared/main-principal/main-principal.component';
import { MenuLoginComponent } from './shared/menu-login/menu-login.component';

// imports
import { MyDatePickerModule } from "mydatepicker";
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos.component';
import { InscricaoComponent } from './usuario/inscricao/inscricao.component';
import { LoginComponent } from './usuario/login/login.component';
import { AdicionarEventoComponent } from './eventos/adicionar-evento/adicionar-evento.component';
import { AcessoNegadoComponent } from './shared/acesso-negado/acesso-negado.component';
import { MeusEventosComponent } from './eventos/meus-eventos/meus-eventos.component';

// services
//import { SeoService } from "app/services/seo.service";
import { OrganizadorService } from "app/usuario/organizador.service";
import { AuthService } from "app/shared/auth-service";
import { EventoService } from "app/eventos/evento.service";
import { ToastrCustomOption } from "app/utils/ToastrCustomOption";

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    FooterComponent,
    MainPrincipalComponent,
    HomeComponent,
    MenuLoginComponent,
    ListaEventosComponent,
    InscricaoComponent,
    LoginComponent,
    AdicionarEventoComponent,
    AcessoNegadoComponent,
    MeusEventosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MyDatePickerModule, 
    ToastModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: false})
  ],
  providers: [
    Title,
    //SeoService,
    OrganizadorService,
    AuthService,
    EventoService,
    {provide : ToastOptions, useClass: ToastrCustomOption}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
