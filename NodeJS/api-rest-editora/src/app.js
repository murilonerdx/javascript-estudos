import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,"titulo": "Senhor dos aneis"
    }
    ,{
        id: 2,"titulo": "O Hobbit"
    }
]

app.get('/', (req, res) =>{
    res.status(200).send('Curso node');
});

app.get('/livros', (req, res) =>{
    res.status(200).json(livros);
});

app.post('/livros', (req, res) =>{
    livros.push(req.body);
    res.status(201).json(livros);
})

app.put('/livros/:id', (req, res)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.get('/livros/:id', (req, res)=>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;