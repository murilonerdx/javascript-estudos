function mostrarHora(){
    let data = new Date(); //Criar uma nova data
    return data.toLocaleTimeString('pt-BR',{ //Pega apenas o valor do timestamp
        hour12: false //Fala que não quer que adicione PM E AM
    })
}

function fucaoDoInterval(){ //Apenas uma função normal que vai ficar criando uma hora definida
    console.log(mostrarHora());
}

// setInterval(fucaoDoInterval, 1000); //setInterval é do javascript || ele vai executar a cada 1000 millessegundos = 1 segundo

//Também é normal fazer uma função anonyma, quer dizer que não precisa criar uma função local, mas uma função apenas para executar tal propriedade exemplo

setInterval(function interval(){
    console.log(mostrarHora())
}, 1000);

//Também da pra armazenar setInterval em uma const exemplo

const timer = setInterval(function interval(){ //pode ser tanto functiuon interval como function(){}
    console.log(mostrarHora())
}, 1000);

//também existe a setTimeout que executa só uma vez.
setTimeout(function(){
    clearInterval(timer);
},10000); //quero que ele pare daqui 10 segundos

//fazer ele mostrar algo na tela depois de 5 segundos
setTimeout(function(){
    clearInterval(timer); //Ele limpa e para a contagem
    console.log("Se passou 5 segundos")
},5000); //quero que ele pare daqui 10 segundos