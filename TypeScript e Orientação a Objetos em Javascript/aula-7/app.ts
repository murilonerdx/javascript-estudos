class Carro{
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

class Pessoa{
    private nome!:string;
    private carroPreferido!:string;
    private carro:any;

    constructor(nome:string,carroPreferido:string){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome():string{
        return this.nome;
    }

    public dizerCarroPreferido():string{
        return this.carroPreferido;
    }

    public comprarCarro(carro:any):void{
        this.carro = carro;
    }

    public dizerCarroQueTem():any{
        return this.carro;
    }

}

let carroA = new Carro('dodge journey', 4);
let carroB = new Carro('veloster', 3);
let carroC = new Carro('cerato', 4);

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)


/* comprar carro ---*/

let cliente = new Pessoa('Murilo', 'veloster');
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem());