const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];

const concat = num1.concat(num2); // juntando dois arrays
console.log(concat);

//Outra forma é com rest ...spread

const num4 = [...num1, ...num2];
console.log(num4);