const frutas = ['Maça', 'Banana','Pera','Kiwi'];


for(let indice in frutas){ //Maneira mais facil de percorrer lista ou arrays
    console.log(frutas[indice])
}

for(let fruta of frutas){ //Ainda melhor
    console.log(fruta)
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 20
};

for(let chave in pessoa){ //Para lista é diferente por a chave assumi o valor do atributo
    console.log(chave, pessoa[chave])
}

