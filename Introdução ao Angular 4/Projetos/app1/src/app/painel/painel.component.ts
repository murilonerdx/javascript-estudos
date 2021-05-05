import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase-model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase:";
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase;

  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificaResposta(): void {
    if (this.rodadaFrase.frasePTBr == this.resposta) {
      alert("Resposta certa");
      this.rodada++;
      this.atualizaRodada();
      this.progresso = this.progresso + (100 / this.frases.length);
    } else {
      alert("Resposta Errada")
    }
    
  }
  public atualizaRodada(): void { 
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}

