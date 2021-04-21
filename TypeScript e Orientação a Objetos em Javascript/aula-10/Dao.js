"use strict";
exports.__esModule = true;
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.inserir = function (object) {
        console.log("logica de insert");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log("logica de update");
        return Object();
    };
    Dao.prototype.remover = function (id) {
        console.log("logica de remove");
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log("logica de select");
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("logica getAll");
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
