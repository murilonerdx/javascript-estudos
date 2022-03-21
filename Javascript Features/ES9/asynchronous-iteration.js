let processos = [1,2,3,4,5,6,7]

let iteracaoAssincrona = async () => {
    for(let processo of processos){
        await new Promise((resolve, reject) =>{
            setTimeout(() =>{
                console.log('Processamento assincrono ');
                resolve();
            }, 2000);
        });

        console.log(processo);

    }
}

iteracaoAssincrona();