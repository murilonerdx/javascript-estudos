//Splice remove partes

const nomes = ['Murilo', 'Roberto', 'Juliano', 'Guilherme'];

const removidos = nomes.splice(-2,1); //Removendo de trás pra frente, começando na posição 1

console.log(nomes, removidos);

nomes.splice(3,0,'Matheus'); //vai adicionar novo item na posição 3
console.log(nomes);