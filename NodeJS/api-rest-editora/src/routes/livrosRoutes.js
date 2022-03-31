import express from "express";
import LivroController from "../controllers/livroController.js"

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.obterLivroPorEditora)
    .get('/livros/:id', LivroController.obterPorId)
    .delete('/livros/:id', LivroController.deletarLivro)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro);

export default router;