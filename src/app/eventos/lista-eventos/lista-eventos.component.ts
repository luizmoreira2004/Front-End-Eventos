import { Component, OnInit } from '@angular/core';
import { EventoService } from "app/eventos/evento.service";
import { Evento } from "app/eventos/evento";
//import { SeoService, SeoModel } from "app/services/seo.service";

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {
public eventos: Evento[];
public errorMessage: string = "";

  constructor(public eventoService: EventoService) { 
  }

  ngOnInit() {
    this.eventoService.obterTodos()
      .subscribe(
        eventos => this.eventos = eventos,
        error => this.errorMessage
      );
  }
}
