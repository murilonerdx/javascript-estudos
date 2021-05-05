import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase

  @Output() public encerrarJogo = new EventEmitter();

  public progresso: number = 0
  public tentativas: number = 3


  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log(this.tentativas)
    // console.log('Verificar resposta: ', this.resposta)
    if (this.rodadaFrase.frasePTBr == this.resposta) {
      this.rodada++

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()
      if (this.rodada == FRASES.length) {
        this.progresso = this.progresso + (100 / this.frases.length)
        alert("Você conclui as traduções com sucesso")
        this.encerrarJogo.emit('vitoria');
      }
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      
      
    } else {
      this.tentativas--
      if(this.tentativas === -1) {
        alert('Você perdeu todas as tentativas');
        this.encerrarJogo.emit('derrota');
      }
    }
  }
  
  public atualizaRodada(): void{
    //define a frase da rodada com base em alguma lógica 
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }
}
