const express = require('express');

const app = express();

// Tratar informações na query
app.use(express.urlencoded({ extended: true }))

app.get('/',(req, res) =>{
        res.send(`
        <form action='/' method="POST">
            Nome do cliente: <input type="text" name="nome">
            <button> Enviar</button>
        </form>
        `);
});

app.post('/', (req,res)=>{
    console.log(req.body);
    res.send(`O que você enviou foi: ${req.body.nome}`);
})

app.get('/contato',(req, res) =>{
    res.send('Obrigado por entrar em contato com a gente.');
})

app.get('/teste/:idUsuarios?/:parametro?',(req, res) =>{
    console.log(req.query); // ?nome=Murilo&idade=21&nacionalidade=Brasileiro
    console.log(req.params);
    res.send('Obrigado por entrar em contato com a gente.');
})

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});