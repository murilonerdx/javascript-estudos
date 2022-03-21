let processoAssincrono = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Sucesso no processo assincrono'), 3000)
})

function recuperarDados(){
    await processoAssincrono.then(p=> console.log(p));

    console.log('Processamento assincrono 1');

    await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(r => r.json())
        .then(d => console.log('COMMENTS: ', d));

    console.log('Processamento assincrono 2');

    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(d => console.log('POSTS: ',d));

    console.log('Processamento assincrono 3');

    return 'fim';
}

recuperarDados().then((p) => console.log(p));