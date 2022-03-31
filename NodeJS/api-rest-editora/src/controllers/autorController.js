import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores)=>{
            res.status(200).json(autores);
        });
    };

    static cadastrarAutor = (req, res) => {
        let Autor = new autores(req.body);

        Autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            }else{
                res.status(200).send(Autor.toJSON());
            }
        });
    }

    static deletarAutor= (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err, autores)=>{
            if(!err){
                res.status(200).send({message: `Autor ${id} deletado com sucesso`});
            }else{
                res.status(400).send({message: `${err.message} - falha ao cadastrar autor.`});
            }
        });
    }

    static obterPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, autores)=>{
            if(!err){
                res.status(200).send(autores);
            }else{
                res.status(400).send({message: `${err.message} - falha ao cadastrar autor.`});
            }
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso'});
            }else{
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`});
            }
        });
    }

}

export default AutorController;