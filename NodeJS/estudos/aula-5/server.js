const express = require('express');

const app = express(0);

app.get('/',(req, res) =>{
    res.send('Hello world!');
})

app.get('/contato',(req, res) =>{
    res.send('Obrigado por entrar em contato com a gente.');
})

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});