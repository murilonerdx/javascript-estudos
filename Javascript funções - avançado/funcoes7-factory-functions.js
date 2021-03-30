function criaPessoa(nome, sobrenome, a, p){ //Você pode criar uma função passando metodos ou outras funções referenciando o proprio objeto ou função passada
    return {
        nome,
        sobrenome,
        fala(assunto){ //Metodo para referenciar o nome e colocar um assunto
            return `${this.nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,
        get imc(){ //pegando ele como um atributo apenas adicionar o get
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Murilo','Silva', 1.72,82);
console.log(p1.imc());
const p2 = criaPessoa('Roberto','Silva');
console.log(p2.fala('Falando sobre JS'));
