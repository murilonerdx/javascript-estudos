function saudacao(nome){
    return `Olá ${nome}!!`;
}

function soma(x,y){
    const resultado = x + y;
    return resultado; //Depois do return não pode colocar nada
}

function soma2(x = 0, y=0){//Definindo valor padrão
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2,2); //Armazenando o valor em uma variavel
console.log(resultado);

console.log(soma(1,6));

console.log(saudacao('Murilo'))

console.log(soma2())

const raiz = function(numero){ //função com const
    return numero ** 0.5;
};

console.log(raiz(9));

const raiz2 = (numero) =>{ //Usando arrow function
    return numero ** 0.5;
}

console.log(raiz2(16))