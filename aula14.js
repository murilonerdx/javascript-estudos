let num1 = 1;
let num2 = 2.5;
let num3 = 234.915;
console.log(num1.toString() + num2); // É como fazer uma string 1 + 2.5 = 12.5
console.log(typeof num1); //porém o num1 = um number

//ver a versão binaria
console.log(num1.toString(2));

//Arredondar
console.log(num3.toFixed(2));
//Verificar se o numero é um inteiro
console.log(Number.isInteger((num1)));

//Convertendo
num1 += num2; //1 + 2.5 = 3.5
num1 += num2; // 3.5 + 2.5 = 6.0
num1 += num2; // 6.0 + 2.5 = 8.5
num1 += num2; // 8.5 + 2.5 = 11

num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));