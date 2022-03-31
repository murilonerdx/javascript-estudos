import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router();

router
    .get('/autor', AutorController.listarAutores)
    .get('/autor/:id', AutorController.obterPorId)
    .delete('/autor/:id', AutorController.deletarAutor)
    .post('/autor', AutorController.cadastrarAutor)
    .put('/autor/:id', AutorController.atualizarAutor);

export default router;