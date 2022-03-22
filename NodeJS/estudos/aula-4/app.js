const path = require('path');

//dirname pegando a pasta atual .. voltando, e criando um arquivo teste.json
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escrever = require('./modules/escreve');
const ler = require('./modules/ler');

const pessoas = [
    {
        nome: 'Murilo',
        idade: '21'
    },
    {
        nome: 'José',
        idade: '19'
    },
    {
        nome: 'Roberto',
        idade: '32'
    }
];

async function lerArquivo(caminho){
    return await ler(caminho).then(dados => console.log(dados));
}

function renderizarDados(dados){
    dados.forEach(val => console.log(val.nome));
}

//Identação '', com dois espaços
const pessoasJson = JSON.stringify(pessoas, '', 2);
escrever(caminhoArquivo,pessoasJson);

lerArquivo(caminhoArquivo);