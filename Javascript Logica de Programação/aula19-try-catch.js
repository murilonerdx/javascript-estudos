// try{
//     console.log(naoExisto) //caso tenha um erro no bloco ele já desce para o bloco de erro de baixo
// }catch(err){
//     console.log(err)
// }


function soma(x, y) {//lançando exception com throw
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser numeros')//mostrando erro personalizado
        //Para colocar error javascript apenas instanciar new Error();
    }
    return x + y;
}


try {
    console.log(soma(1, 1));
    console.log(soma('a', 1)); //Erro
} catch (err) {
    console.log(err); //Identificando erro.
} finally {
    console.log("Eu sempre sou executado")
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) { //Sempre é bom colocar ! para negação
        throw new TypeError('Esperando instancia de Date')
    }
    if (!data) { //Instanciando nova data caso ele não coloque
        data = new Date(); //Caso ele não coloque eu mesmo chamo
    }
    return data.toLocaleTimeString('pt-br', {
        hour12: false,//retornando hora e tirando o PM e AM
        minute: '2-digit', //2 digitos no minuto
        second: '2-digit',//2 digitos no segundos
        hour: '2-digit' //2 digitos na hora
    });
}

const hora = retornaHora()
const hora2 = retornaHora(11) //Erro
console.log(hora);





