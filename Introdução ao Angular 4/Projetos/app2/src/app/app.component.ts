import { Component } from '@angular/core';
import { OfertaService } from './oferta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OfertaService]

})
export class AppComponent {
  title = 'Passaro-Urbano';
}
