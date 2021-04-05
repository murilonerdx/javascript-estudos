const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pessoas = [
    {nome: 'Murilo', idade: 20},
    {nome: 'João', idade: 17},
    {nome: 'Isaque', idade: 26},
    {nome: 'Roberto', idade: 16}
]


const numerosEmDobro = nums.map(x => x*2);
const idadeModificador = pessoas.map(x => ({idade: x.idade }));
const nomesModificadores = pessoas.map(x => ({nome: x.nome }));
console.log(nomesModificadores);
console.log(idadeModificador);

console.log(numerosEmDobro)

