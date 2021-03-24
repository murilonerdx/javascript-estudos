const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000]
const [primeiroNumero, segundoNumero] = numeros; //Ele pega os valores dentro de numeros
console.log(primeiroNumero, segundoNumero);
const [um, dois, ...resto] = numeros; //tres pontos para pegar o resto
console.log(resto) //Pega o restande dos numeros em um array novo chamado resto
const [n1, , n3, , n5, ,n7] = numeros; //pulando os valores vazios
console.log(n1, n3, n5, n7)

// ..rest, ..spread
//                  0      1      2
//                0 1 2  3 4 5  6 7 8
const nums = [[1,2,3],[4,5,6],[7,8,9]];
const[,[,,seis]] = nums; // ,do primeiro -> entrando no segundo ,[4,5, (6) pegando o seis]
console.log(seis);

const [lista1, lista2, lista3] = nums;
console.log(lista2[2]); //faz a mesma coisa que o de cima.