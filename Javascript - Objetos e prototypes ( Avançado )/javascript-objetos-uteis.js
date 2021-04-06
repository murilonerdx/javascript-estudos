const produto = {nome: 'Produto', preco: 1.8};

const caneca = Object.assign({},produto, {material: 'porcelana'});

caneca.nome = 'Outro nome';
caneca.preco = 2.6;

console.log(produto);
console.log(caneca);

// Object.keys (retorna as chaves) //Vê as chaves que o objeto tem
// Object.freeze (congela o objeto) //Você não consegue modificar
// Object.defineProperties() (define varias propriedades)
// Object.defineProperty() (define uma propriedade)
// Object.values() (Mostra seus valores)
// Object.getOwnPropertyDescriptor(o, 'prop')
const produto2 = {
    nome: 'Produto',
    preco: 1.8
};
//
// const caneca2 = {nome: produto.nome, preco: produto.preco};
// Object.freeze(produto);
// console.log(Object.keys(produto))
// console.log(Object.values(produto));
// console.log(Object.entries(produto))
for(let [chave, valor] of Object.entries(produto)){ //Da pra você interar
    console.log(chave, valor);
}
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //Descrição do objeto