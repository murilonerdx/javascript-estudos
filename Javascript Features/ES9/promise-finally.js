let p = new Promise((resolve, reject) =>{
    if(false){
        reject('Rejeitada');
    }

    resolve('Resolvida');
})
.then((resultado) => console.log(resultado))
.catch((rejeitado) => console.log(rejeitado))
.finally(()=> {
    console.log('Fluxo se rejeitado ou resolvido');
});