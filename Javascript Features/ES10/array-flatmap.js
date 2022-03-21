let nomes = [
    'Murilo, Homem',
    'José,',
    'Luan,',
    'Marcos,',
    'João,'
]


let nomesMap = nomes.map(item => {
    return item.split(',');
});

let nomesFlatMap = nomes.flatMap(item => {
    return item.split(',');
});

console.log(nomesMap);