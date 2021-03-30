function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    const metodoInterno = function(){
        console.log('Não consigo ser acessado do escopo de fora');
    }

    this.metodo = function(){
        console.log('Sou um método');
    };
}

const p1 = new Pessoa('Murilo','Silva');
const p2 = new Pessoa('Roberto','Silva');

console.log(p1.nome);
p2.metodo()