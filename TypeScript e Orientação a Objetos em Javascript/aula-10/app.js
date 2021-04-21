"use strict";
exports.__esModule = true;
var Concessionaria_1 = require("./Concessionaria");
var Dao_1 = require("./Dao");
var Pessoa_1 = require("./Pessoa");
var concessionaria = new Concessionaria_1["default"]('', []);
var pessoa = new Pessoa_1.Pessoa('', '');
var dao3 = new Dao_1.Dao();
dao3.inserir(concessionaria);
