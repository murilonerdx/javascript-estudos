//Promise.all Promise.race Promise.resolve Promise.reject

const promises = ['Primeiro valor',esperaAi('Promice-1', 3000)
    ,esperaAi('Promice-2', 500),esperaAi('Promice-3', 1000)];


function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(msg);
        },tempo)
    })
}

// Promise.all = vai percorrer todos os valores e ver qual foi rejeitado
Promise.all(promises).then(function(valor){
        console.log(valor)
}).catch(function(erro){
    console.log(erro);
});

//Promise.race = primeiro valor
Promise.race(promises).then(function(valor){
    console.log(valor)
}).catch(function(erro){
    console.log(erro);
});

function baixarPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Pagina em cache')
    }else{
        return esperaAi('Baixei a pagina',3000);
    }
}

baixarPagina().then(dadosPagina =>{
    console.log(dadosPagina);
}).catch(e=>console.log(e));