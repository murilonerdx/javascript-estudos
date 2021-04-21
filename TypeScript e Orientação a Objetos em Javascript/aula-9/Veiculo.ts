export class Veiculo{
  protected modelo!:string;
  private velocidade: number = 0;
  
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

