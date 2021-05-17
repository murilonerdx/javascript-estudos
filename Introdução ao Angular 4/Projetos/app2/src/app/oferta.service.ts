import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor() { }

  public getOfertas(): Array<string> {
    let ofertas = ['Oferta1', 'Oferta2', 'Oferta3']
    return ofertas;
  }
}
