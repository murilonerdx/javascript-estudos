const database = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas); 
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegarUmaPessoa(req, res){
        const {id} = req.params;

        try{
            const pessoa = await database.Pessoas.findOne({where: {id: Number(id)}});
            return res.status(200).json(pessoa); 
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criarPessoa(req, res){
        const novaPessoa = req.body;

        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada); 
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizarRegistro(req, res){
        const {id} = req.params;
        const novaPessoa = req.body;

        try{
            await database.Pessoas.update(novaPessoa, {where: {id: id}});
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}});

            return res.status(200).json(pessoaAtualizada); 
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deletarRegistro(req, res){
        const {id} = req.params;

        try{
            await database.Pessoas.destroy({where: {id: Number(id)}});
            return res.status(200).json({message: 'Pessoa excluida com sucesso'}); 
        }catch(error){
            return res.status(500).json(error.message);
        }
    }


}

module.exports = PessoaController;