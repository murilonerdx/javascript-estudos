//Voc~e pode fazer a função retornar valores para armazenar em variaveis

function criarPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criarPessoa('Murilo','Silva');

const p2 = {
    nome: 'Roberto',
    sobrenome: 'Silva'
};

console.log(p1, p2);

function falaFrase(comeco){
    return comeco + ' Mundo! ';
}

const olaMundo = falaFrase('Ola');
console.log(olaMundo);