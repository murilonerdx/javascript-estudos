//Tipos de dados primitivos
//String, number, undefined, boolean ...
const nome = 'Murilo';//String
const nome1 = "Murilo";//String
const nome2 = `Murilo`;//String
let verdade = true; //boolean true ou false
let number = 1.0;//number
let nomeAluno;//undefined
let sobrenomeAluno = null//null
//para ver o tipo
console.log(typeof nome, nome)
//-------------------------------------
//Dados primitivos.
let a = 2;
let b = a;
console.log(a,b);
a = 3;
console.log(a,b)
//---------------------------------------------------
//Operadores aritmeticos + - / %

let dado1 = 10;
let dado2 = 5;
let resultado = dado1 % dado2 // resto
console.log(resultado)  

resultado = dado1 + dado2; //soma
console.log(resultado); 

resultado = dado1 - dado2; //subtração
console.log(resultado);

resultado = dado1 / dado2 //divisão
console.log(resultado);

let contador = 1;

contador++
contador++
contador++

contador *= 10
contador /=5
contador +=2

console.log(contador);

//Tratando String 
let umaString = 'Murilo Pereira'

console.log(umaString.charAt(8)); // Pegando E
console.log(umaString[1]) //Pegando U
console.log(umaString.concat(' da Silva'))
console.log(`${umaString} da Silva`)

//indexOf vai começar na posição tal procurando por uma letra tal
console.log(umaString.indexOf('o', 3)) // Começando na posição 3, na posição 5 tem um O

//lastIndexOf começando de tras pra frente
console.log(umaString.lastIndexOf('o',6))

//match para achar algo
let letrasMinuscula= umaString.match(/[a-z]/g)
console.log(letrasMinuscula) // procura todas letras minusculas

//search procurar
console.log(umaString.search(/a/)) // Vai procurar a primeira letra A

//replace substituir
console.log(umaString.replace('Pereira', 'Anjos'))

//Pegar o tamanho
console.log(umaString.length)

//Fatiar uma String
console.log(umaString.slice(2, 6)) //Vai do indice 2 até indice 6








