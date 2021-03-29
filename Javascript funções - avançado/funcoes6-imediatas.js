

(function(){
    const nome = 'Murilo';//escopo de dentro
    console.log(nome); //Não altera o escopo global, e ela não precisa ser chamada para ser executada
})();

const nome = 'Roberto'; //escopo global
console.log(nome);


//Executando de forma completa

(function(idade, peso, altura){
    const nome = 'Godoberto';//escopo de dentro

    function falaNome(nome){
        console.log(nome);
    }

    falaNome(nome);
    console.log(idade, peso, altura);


})(30,80,1.80);