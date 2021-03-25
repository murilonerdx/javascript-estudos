const pessoa = {
    nome: 'Murilo',
    sobrenome: 'Silva',
    idade: 20,
    endereco: {
        rua: 'Afonso celso',
        numero: 1102
    }
};

//atribuição via desestruturação

const { nome, anoNascimento = '2001' } = pessoa; // Adicionando valor padrão para algo que não existe
console.log(nome, anoNascimento);


const {endereco: {rua, numero}} = pessoa //Acessando valor dentro de outro valor

console.log(rua)