const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function callbackFilter(valor, indice = 10) { //uma função para filtrar
    if (valor < indice) return true;
}


const numerosFiltrador = nums.filter(valor => callbackFilter(valor, 5));
console.log(numerosFiltrador);

//Ou fazer em algo separado.


const numerosFiltrador2 = nums.filter(function (valor) {
    return valor < 5;
});
console.log(numerosFiltrador2);

const numerosFiltrador3 = nums.filter(valor => valor < 5);
console.log(numerosFiltrador3);


const pessoas = [
    {nome: 'Murilo', idade: 20},
    {nome: 'João', idade: 17},
    {nome: 'Isaque', idade: 26},
    {nome: 'Roberto', idade: 16}
]

const pessoasMaioresDeIdade = pessoas.filter(x => x.idade >= 18);
console.log(pessoasMaioresDeIdade);



