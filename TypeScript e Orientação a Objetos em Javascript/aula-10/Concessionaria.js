"use strict";
exports.__esModule = true;
exports.Concessionaria = void 0;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarro) {
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        console.log("De segunda a sexta das 08:00 as 18:00");
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarro;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
exports["default"] = Concessionaria;
