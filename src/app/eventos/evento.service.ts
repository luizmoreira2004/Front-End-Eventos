import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { ServiceBase } from "app/shared/service-base";
import { Evento, Categoria } from "app/eventos/evento";

@Injectable()
export class EventoService extends ServiceBase {
    constructor(private http: Http) { super(); }

    public obterUsuario() {
        return JSON.parse(localStorage.getItem('eio.user'));
    }

    obterTodos(): Observable<Evento[]> {
        return this.http.get(this.UrlServiceV1 + "eventos")
            .map((res: Response) => <Evento[]>res.json())
            .catch(super.serviceError);
    }

    obterMeusEventos(): Observable<Evento[]> {
        let options = this.obterAuthHeader();

        return this.http.get(this.UrlServiceV1 + "eventos/meus-eventos", options)
            .map((res: Response) => <Evento[]>res.json())
            .catch(super.serviceError);
    }

    obterCategorias(): Observable<Categoria[]> {
        return this.http.get(this.UrlServiceV1 + "eventos/categorias")
            .map((res: Response) => <Categoria[]>res.json())
            .catch(super.serviceError);
    }

    registrarEvento(evento: Evento): Observable<Evento> {
        let options = this.obterAuthHeader();
        evento.id = undefined;

        let response = this.http
            .post(this.UrlServiceV1 + "eventos", evento, options)
            .map(this.extractData)
            .catch((super.serviceError));
        return response;
    };

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
}