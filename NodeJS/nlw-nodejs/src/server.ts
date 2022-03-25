import express from "express";

const app = express();

app.get("/test", (request, response) => {
    response.send("Olá Mundinho");
})

app.post("/test", (request, response) => {
    response.send("POST: enviando");
})

app.listen(3000, ()=>{
    console.log("Servidor rodando");
})