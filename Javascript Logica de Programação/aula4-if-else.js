

const hora = 5;

function bomOque(hora){
    if(hora <=11){
        console.log('Bom dia');
    }else if(hora >=12 && hora <= 17){
        console.log("Boa tarde");
    }else if(hora >=18 && hora <= 23){
        console.log('Boa noite');
    }else{
        console.log('Dinossauro!')
    }
}

function oNumeroESTA(numero){
    if(numero >=0 && numero <= 5){
        console.log('Numero está entre 0 e 5');
    }else if(numero >=6 && numero <= 10){
        console.log('Numero está entre 6 e 10')
    }else{
        console.log('Numero não está no range de 0 a 10')
    }
}

bomOque(hora);
oNumeroESTA(6)