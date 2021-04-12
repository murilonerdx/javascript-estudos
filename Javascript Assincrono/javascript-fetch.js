fetch('pagina1.html').then(resposta =>{
    if(resposta.status !== 200) throw new Error('ERROR 404'){
        return resposta.text();
    }
}).catch(e => console.error(e));