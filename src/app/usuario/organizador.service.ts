import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Organizador } from "app/usuario/organizador";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';

@Injectable()
export class OrganizadorService {
    constructor(private http: Http) {

    }

    registrarOrganizador(organizador: Organizador): Observable<Organizador> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //let jsons = JSON.stringify(organizador);
        let response = this.http
            .post("http://localhost:8285/api/v1/nova-conta", organizador, options)
            .map(this.extractData)
            .catch(this.serviceError);

        return response;
    }

    login(organizador: Organizador): Observable<Organizador> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let response = this.http
            .post("http://localhost:8285/api/v1/conta", organizador, options)
            .map(this.extractData)
            .catch(this.serviceError);

        return response;
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    protected serviceError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(error);
        return Observable.throw(error);
    }
}