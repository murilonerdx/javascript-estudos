function* geradora1(){ //Ele conforme executa ele vai indo para o proximo yield
    yield 'Valor-1';
    yield 'Valor-2';
    yield 'Valor-3';
}
const g1 = geradora1();

console.log(g1.next());//.next() para ir para o proximo valor

function* geradora2(){
    let i = 0;

    while(true){//gerador infinito
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next());//0
console.log(g2.next());//1
console.log(g2.next().value);// vai pegar apenas o valor
