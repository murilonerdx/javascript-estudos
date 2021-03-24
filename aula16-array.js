const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo'; //Você modifica o que existe e sobrescreve
alunos[3] = 'Luiza'; //Agora você adicionou Luiza
alunos[alunos.length] = 'Murilo'; //Sempre adiciona na ultima posição
alunos[alunos.length] = 'Roberto';
alunos[alunos.length] = 'Juliana';


//Mas existe uma maneira mais facil como
alunos.push('Otavio'); //Adicionando na ultima posição
alunos.unshift('Luan'); //Adiciona no primeiro indice
const ultimoRemovido = alunos.pop(); //Remove o ultimo elemento
const primeiroRemovido = alunos.shift();
console.log(ultimoRemovido); //Mostra quem foi o ultimo removido
console.log(primeiroRemovido); //Mostra quem foi o primeiro removido
console.log(alunos);