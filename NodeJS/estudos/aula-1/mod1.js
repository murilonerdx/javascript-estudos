const nome = 'Murilo';

const sobrenome = 'Silva';

const falaNome = () =>{
    console.log(nome, sobrenome);
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(module.exports);
console.log(exports);