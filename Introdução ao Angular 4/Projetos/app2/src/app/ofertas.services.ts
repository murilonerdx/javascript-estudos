import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import {Observable} from 'rxjs'; 

import { Oferta } from './shared/oferta.model'


@Injectable()
export class OfertasService {
    constructor(private http: Http) { }

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((resposta: any) => resposta.json())

        //retornar uma promise Oferta
    }
}
