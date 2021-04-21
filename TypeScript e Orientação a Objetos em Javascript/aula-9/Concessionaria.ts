import { ConcessionariaInterface } from './ConcessionariaInterface';
export class Concessionaria implements ConcessionariaInterface{
    private endereco!: string;
    private listaDeCarro:any;

    constructor(endereco:string,listaDeCarro:any){
        this.endereco=endereco;
        this.listaDeCarro=listaDeCarro;
    }
    fornecerHorarioDeFuncionamento(): void {
        console.log("De segunda a sexta das 08:00 as 18:00");
    }

    public fornecerEndereco():string{
        return this.endereco;
    }

    public mostrarListaDeCarros():any{
        return this.listaDeCarro;
    }
}

export default Concessionaria;