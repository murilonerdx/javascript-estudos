const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pessoas = [
    {nome: 'Murilo', idade: 20},
    {nome: 'João', idade: 17},
    {nome: 'Isaque', idade: 26},
    {nome: 'Roberto', idade: 16}
]


const nomeMaisVelho = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

const total = nums.reduce(function(acumulador, x){
    acumulador = acumulador + x;
    return acumulador;
});

console.log(total);
console.log(nomeMaisVelho);