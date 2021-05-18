import { Component, OnInit } from '@angular/core';
import { OfertaService} from '../oferta.service'
import { Oferta  } from '../oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]

})
export class HomeComponent implements OnInit {

  constructor(public service: OfertaService) { }
  
  public ofertas: Oferta[]


  ngOnInit() {
    this.ofertas = this.service.getOfertas()
    console.log(this.ofertas);
  }

}
