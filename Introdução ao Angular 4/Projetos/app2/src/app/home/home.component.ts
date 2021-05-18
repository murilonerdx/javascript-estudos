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

  public oferta: Oferta[]
  constructor(public service:OfertaService) { }

  ngOnInit() {
    this.oferta = this.service.getOfertas()
    console.log(this.oferta)
  }

}
