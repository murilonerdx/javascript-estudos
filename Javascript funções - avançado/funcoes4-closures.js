function retornaFuncao(){
    const nome = 'Murilo';
    return function(){ //Ao abrir e fechar o return ele vai levar junto com ele todo o escopo
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao) //funcao