var Carro = /** @class */ (function () {
    function Carro(modelo) {
        this.velocidade = 0;
        this.modelo = modelo;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarro) {
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarro;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria("Sedan", ["Sedan"]);
console.log(concessionaria);
