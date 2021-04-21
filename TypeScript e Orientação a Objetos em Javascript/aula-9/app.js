"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var carroA = new Carro_1.Carro('dodge journey', 4);
var carroB = new Carro_1.Carro('veloster', 3);
var carroC = new Carro_1.Carro('cerato', 4);
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Av Paulista', listaDeCarros);
/* comprar carro ---*/
var cliente = new Pessoa_1.Pessoa('Murilo', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
