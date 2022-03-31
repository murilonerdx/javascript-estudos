import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        author: {type: String, required: true},
        editore: {type: String, required: true},
        numeroPagina: {type: Number}
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;