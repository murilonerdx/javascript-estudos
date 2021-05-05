import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.mode';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
