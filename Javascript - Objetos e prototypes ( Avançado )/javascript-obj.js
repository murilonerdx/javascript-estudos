function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Murilo', 'Silva');
console.log(p1);


function Quadrado(lado){
    this.lado = lado * lado;
}



const quadrado = new Quadrado(4);


console.log(quadrado.lado);