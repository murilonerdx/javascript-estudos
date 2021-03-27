//Agora você pode declarar variaveis com funções


const souUmDado = function(){
    console.log('Sou um dado.')
};

souUmDado();

//Executar V3CWT  dentro de outra função
//Function expression
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado)

//Agora function arrow

const funcaoArrow = ()=> {
    console.log('Sou uma arrow function');
};

funcaoArrow()
//Criando uma function dentro de um obj
const obj = {
    falar(){
        console.log('Estou falando')
    }
};

obj.falar();