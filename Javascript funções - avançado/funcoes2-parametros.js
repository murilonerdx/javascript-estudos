function funcao(){
    console.log(arguments[1]) //Ele pega os argumentos a mais da função
}

funcao(1,2,3,4,5,6,7,8,9,10);

function funcao2(){
    let total =0;
    for(let argumento of arguments){ //Vai pegar todos argumentos indepentente se usar ou não parametros
        total +=argumento;
    }
    console.log(total);
}

funcao2(1,2,3,4,5,6,7,8,9,10);

//Como observado você pode colocar valores e definir seus valores
function funcao3(a, b=2,c=3){
    console.log(a + b + c)
}
//obs: Se você colocar uma string ele vai dar erro: 2 + '' + 2 = 22
funcao3(3); //Pega apenas o primeiro, mas caso coloque mais 2 valores eles vão sobrepor os valores padrões


//Você pode passar um objeto
function funcao4({nome, sobrenome, idade}){//fazendo destruturação obj
    console.log(nome,sobrenome,idade)
}
let obj = {nome:'Murilo', sobrenome:'Silva', idade:20}
funcao4(obj);


function funcao5([valor1, valor2, valor3]){ //Também funciona com array
    console.log(valor1,valor2,valor3);
}

funcao5([1,2,3]);

function conta(acumulador, ...numeros){ //criando uma somatoria
    for(let numero of numeros){
        acumulador +=numero;
    }
    console.log(acumulador);
}

conta(0, 1,2,3,4,5,6,7,8,9,10);