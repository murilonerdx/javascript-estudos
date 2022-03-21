let object = {
    nome: 'Murilo Pereira',
    profissional: {
        site: 'murilonerdx.com.br',
        profissao: 'Programador'
    },
    hobbies: [
        {
            id: 1, hobby: 'Jogar'
        },
        {
            id: 2, hobby: 'Estudar piano'
        }
    ],
    pais: 'Brasil'
}

console.log(object)
console.log(Object.getOwnPropertyDescriptors(object));

Object.defineProperty(object, 'nome', {
    value: 'Murilo Henrique',
    writable: false
})
