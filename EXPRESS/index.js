const express = require('express');
const app = express();

app.get("/", (req, res) => {
   res.send("Bem-vindo!") 
});

 app.get("/youtube/canal", (req, res) => {
    res.send("AQUI É O CANAL!") 
 });

 app.get("/ola/:nome/:empresa", (req, res) => {
    res.send(`Oi ${req.params.nome} do ${req.params.empresa}!`) 
 });

 app.get("/blog/:artigo?", (req, res) => {
    res.send(req.params.artigo || 'NÃO TEM ARTIGO') 
 });

 app.get("/query", (req, res) => {
    const canal = req.query["canal"]
    res.send(canal) 
 });
 

app.listen(4000, (err) => {
    if(err) {
        console.log('OCORREU UM ERRO')
    } else {
        console.log('Sucesso!')
    }
})