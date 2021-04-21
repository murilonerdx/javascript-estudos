export class Carro{
  private modelo:string;
  private numeroDePortas!: number;
  private velocidade: number = 0;

  constructor(modelo:string, numeroDePortas:number){
      this.modelo = modelo;
  }
  
  public acelerar(): void{
      this.velocidade = this.velocidade;
  }

  public parar():void{
      this.velocidade = 0;
  }

  public velocidadeAtual(): number{
      return this.velocidade;
  }
}

