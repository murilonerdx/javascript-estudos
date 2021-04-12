const nome = 'Murilo';
const nome2 = 'Roberto';
const obj = {nome};
const obj2 = {nome2};
const novoObj = {...obj};
const segundoObj = {novoObj, ...obj, ...obj2}
console.log(novoObj,segundoObj);
