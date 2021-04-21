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
var carro = new Carro("Sedan");
console.log(carro);
