import { Carro } from './Carro';
import { Concessionaria } from './Concessionaria';
import { Pessoa,qualquer_coisa as x } from './Pessoa';

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