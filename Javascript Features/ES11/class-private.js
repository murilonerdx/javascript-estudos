class Pessoa {
    #humor = 1;

    constructor(nome){
        this.nome = nome;
    }

    dizerOi(){
        return `Olá, meu nome é ${this.nome}`
    }

    //privado
    #getHumor(){
        return this.#humor;
    }
}


let p = new Pessoa('Murilo');
console.log(p.dizerOi());
console.log(p.getHumor());