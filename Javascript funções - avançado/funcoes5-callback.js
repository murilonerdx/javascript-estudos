//Você entra em um efeito de cascata, função dentro de função

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num); //Vai gerar um numero aleatorio
} // ele retorna um numero de 1000 a 3000

function f1(callback){
    setTimeout(function (){
        if(callback) callback();
        console.log('f1');
    }, rand());
}

function f2(callback){
    setTimeout(function (){
        if(callback) callback();
        console.log('f2');
    }, rand()); // A quantidade de tempo do timeout é aleatoria
}

function f3(callback){
    setTimeout(function (){
        if(callback) callback();
        console.log('f3');
    }, rand());
}

f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá mundo');
}

f1();
f2();
f3();