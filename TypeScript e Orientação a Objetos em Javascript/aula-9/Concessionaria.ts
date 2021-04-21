export class Concessionaria{
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

export default Concessionaria;