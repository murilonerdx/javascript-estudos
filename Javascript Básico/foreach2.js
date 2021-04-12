Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i + 1);
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

const merda = [1, 2, 3, 4, 5, 7]
merda.forEach2();

aprovados.forEach2((nome, indice) => console.log(`${indice}) ${nome}`))

function printa(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}