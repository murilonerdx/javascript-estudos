const {nome, sobrenome, falaNome} = require('./mod1');
const { Pessoa } = require('./mod2');
const multiplicacao = require('./mod3');
const Cachorro = require('./mod4')

const mod1 = require('./mod1');
const cachorrinho = new Cachorro("Kiba");
const p1 = new Pessoa('Luiz');

console.log(multiplicacao(2,2));
console.log(cachorrinho.latir());

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname));

console.log(path.resolve(__dirname, '../'));


