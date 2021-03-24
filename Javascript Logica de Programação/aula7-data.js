const data = new Date();
// const data2 = new Date()
//ano,mes, dia, hora, minuto,segundo, milissegundo
// const tresHoras = 60*60*3*1000;
// const umDia = 60*60*24*1000
const data2 = new Date('2021-03-24 20:20:59')
console.log(data.toString());
console.log(data2.toString());

console.log('Dia',data2.getDate());
console.log('Mês',data2.getMonth());
console.log('Ano',data2.getFullYear());
console.log('Hora',data2.getHours());
console.log('Min',data2.getMinutes());
console.log('Seg',data2.getSeconds());
console.log('ms',data2.getMilliseconds());
console.log('Semana',data2.getDay());


