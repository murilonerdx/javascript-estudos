function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

//
// esperaAi('Fase 1', rand()).then(valor=>{
//     console.log(valor);
//     return esperaAi('Fase 2',rand());
// }).then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3',rand());
// }).then(fase=>{
//     console.log(fase);
// }).catch(e=>console.log(e))

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
        return 'Terminamos na fase: ' + fase3;
    } catch (e) {
        console.log(e);
    }

}

executa().then(r=>console.log(r));
