// let i =0;
//
// while(i<=10){ //Apenas repete
//     console.log(i);
//     i++;
// }

//While é usado para controle

//exemplo real
//gerar numero aleatorio
function random(min, max){
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

let rand = random(1,50) //gerar numero aleatorio de min até max
// console.log(rand);

function jogarDado(){
    const r = Math.floor(Math.random() * (7 - 1) + 1);
    return r;
}

let jogando = jogarDado()

while( jogando !== 6){
    console.log("Você ainda não chegou no valor maximo do dado ", jogando)
    jogando = jogarDado()
}


do{//ele executa primeiro e depois manda rodar o while
    rand = random(1,50)
    console.log(rand)
}while(rand !== 10);