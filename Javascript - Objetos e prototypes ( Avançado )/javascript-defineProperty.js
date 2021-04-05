function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //pode alterar
        configurable: true, //pode configurar

    });

    Object.defineProperty(this, 'preco', {
        enumerable: true, //mostra a chave
        value: preco, //valor
        writable: false, //pode alterar
        configurable: true, //pode configurar

    });

    Object.defineProperty(this, 'nome', {
        enumerable: true, //mostra a chave
        configurable: true, //pode configurar

        get: function() {
            return nome;
        },
        set:function(valor){
            if(typeof valor == 'number'){
                throw new TypeError('Não é um numero')
            }
            this.nome = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 124;
console.log(p1);