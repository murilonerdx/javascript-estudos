class Carro{
    private modelo:string;
    private numeroDePortas?: number;
    private velocidade: number = 0;

    constructor(modelo:string){
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

class Concessionaria{
    private endereco!: string;
    private listaDeCarro:any;

    constructor(endereco:string,listaDeCarro:any){
        this.endereco=endereco;
        this.listaDeCarro=listaDeCarro;
    }

    public fornecerEndereco():string{
        return this.endereco;
    }

    public mostrarListaDeCarros():any{
        return this.listaDeCarro;
    }
}

let concessionaria = new Concessionaria("Sedan",["Sedan"]);
console.log(concessionaria);