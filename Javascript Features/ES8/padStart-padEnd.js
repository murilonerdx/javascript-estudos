let codigo = '1000';
let codigo2 = '8888';
codigo = codigo.padStart(10, '*');
console.log(codigo);

codigo2 = codigo2.padEnd(10, '$');
console.log(codigo2);