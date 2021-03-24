const pessoa1 = { //Objeto
    nome: 'Murilo',
    sobrenome: 'Silva',
    idade: 20
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);//Acessando informações


function criaPessoa(nome, sobrenome, idade){ //Criar função para criar objeto
    return {
        nome,
        sobrenome,
        idade,
        fala(){
            console.log(`Olá ${this.nome}`) //Criando função de fala dentro do objeto
        }
    };

}

const pessoa2 = criaPessoa('Roberto','Mirando', 25);
console.log(pessoa2); //Pessoa criada

console.log(pessoa2.fala());


//
// let pessoas = [pessoa1, pessoa2]; //Uma lista de pessoas
// console.log(pessoas);
//



