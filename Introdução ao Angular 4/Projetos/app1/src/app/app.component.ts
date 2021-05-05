import { Component } from '@angular/core'; //permite decorar a class, fazendo se tornar em um componente Angular

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public encerrarJogo(tipo: string): void {
    if (tipo == 'vitoria') {
      console.log('vitoria');
    } else if (tipo == 'derrota') {
      console.log('derrota');
    }
  }
}
