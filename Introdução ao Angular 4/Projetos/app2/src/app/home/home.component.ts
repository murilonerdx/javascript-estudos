import { Component, OnInit } from '@angular/core';
import { OfertaService} from '../oferta.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {

  constructor(public service:OfertaService) { }

  ngOnInit() {
    console.log(this.service.getOfertas);
  }

}
