
const elementos = [
    {tag: 'p', texto:'Nunca julgue um livro pela capa'},
    {tag: 'div', texto:'Vale mais 2 pedras no sapato do que 3 no rim'},
    {tag: 'footer', texto:'A cada 60 segundos no Japão, é 1 minuto no mundo'},
    {tag: 'section', texto:'O homem que não vê, claramente não enxerga'},
]

for(let x = 0; x < elementos.length; x++){
    let {tag, texto} = elementos[x];
    element(tag, texto);
}

function element(tag, texto){
    const container = document.querySelector('.container');
    const divContainer = document.createElement('div');
    const element = document.createElement(tag);
    element.innerHTML = texto;
    divContainer.appendChild(element);
    container.appendChild(divContainer);
}

