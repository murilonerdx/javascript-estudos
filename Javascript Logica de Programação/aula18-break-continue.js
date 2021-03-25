const numeros = [1,2,3,4,5,6,7,8,9]

for(let numero of numeros){
    if(numero === 2){ //Ele pula o numero dois e retorna para a execução do for
        console.log('pulei o numero 2')
        continue; // ele retorna ao for sem executar o que tem for abaixo
    }

    if(numero === 7){
        break; //Ele vai quebrar o laço e sair do for
    }
    console.log(numero)
}