import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros)=>{
            res.status(200).json(livros);
        });
    };

    static cadastrarLivro = (req, res) => {
        let Livro = new livros(req.body);

        Livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            }else{
                res.status(200).send(Livro.toJSON());
            }
        });
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err, livros)=>{
            if(!err){
                res.status(200).send({message: `Livro ${id} deletado com sucesso`});
            }else{
                res.status(400).send({message: `${err.message} - falha ao cadastrar livro.`});
            }
        });
    }

    static obterPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor','nome')
        .exec((err, livros) =>{
            if(!err){
                res.status(200).send(livros);
            }else{
                res.status(400).send({message: `${err.message} - falha ao cadastrar livro.`});
            }
        });
    }

    static obterLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({"editora": editora}, {}, (err, livros)=>{
            if(!err){
                res.status(200).send(livros);
            }else{
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            }
        });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'});
            }else{
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            }
        });
    }

}

export default LivroController;