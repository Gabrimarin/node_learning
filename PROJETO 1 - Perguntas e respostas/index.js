const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

connection
  .authenticate()
  .then(() => {
    console.log("Conexão sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });
// Usar EJS como view engine
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true }).then((perguntas) => {
    res.render("index", {
      perguntas,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

// POST
app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  Pergunta.create({ titulo: titulo, descricao: descricao }).then(() => {
    res.redirect("/");
  });
});

app.listen(8080, () => {
  console.log("Rodando em http://localhost:" + "8080");
});
