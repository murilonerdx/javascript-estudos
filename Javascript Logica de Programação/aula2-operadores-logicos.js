// Operadores Lógicos
//
// && -> AND -> E
// || -> OR -> OU
// ! -> NOT -> NÃO
// 1 e 0 = true
// -1 = false
console.log(true && true); //true 1 * 1 = 1
console.log(true && false);//false 1 * -1
console.log(true || true);//true 1 + 1
console.log(true || false);//true 1 - 1
console.log(!true);//false
console.log(!false);//true

const usuario = 'Murilo';
const senha = '123'

console.log(usuario === 'Luiz' && senha === '123') //false
console.log(usuario === 'Murilo' && senha === '123') //true
console.log(usuario === 'Murilo' || senha === '123') //true