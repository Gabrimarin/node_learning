# Node.js
## O que é?
Interpretador JavaScript que roda _fora_ dos navegadores;
Interpretador = Programa que entende e executa um código;

## Por que usar?
- Leve;
- Rápido;
- Grande ecossistema;
- Utiliza JavaScript;
- Netflix, Paypal, Uber;

## Uso

```node index.js```

# NPM (Node package manager)
Gerenciador de pacotes do node
## USO
```npm init```

# HTTP (_Hypertext Transfer Protocol_)
## O que é?
Protocolo que faz a ligação entre o usuário e o servidor web.

## HTTP - NODE.JS
Uso da biblioteca *http*.

## Uso

```javascript
    var http = require('http');
    http.createServer((req, res) => {
        resposta.end("<h1>AQUI VAI O CÓDIGO HTML<h2>");
    }).listen(8181)
```

# Express.js
## O que é?
Framework de desenvolvimento web backend pra webJs.

## Pra que?

## Uso

### Instalação
npm install express --save

### Iniciar projeto
/index.js

```javascript
const express = require('express');
const app = express(); // Instância do express

// Rotas
app.get("/", (req, res) => {
   res.send("Bem-vindo!") 
});

 app.get("/youtube/canal", (req, res) => {
    res.send("AQUI É O CANAL!") 
 });


// Parametros na rota
 app.get("/ola/:nome/:empresa", (req, res) => {
    res.send(`Oi ${req.params.nome} do ${req.params.empresa}!`) 
 });

// Parametros opcionais
 app.get("/blog/:artigo?", (req, res) => {
    res.send(req.params.artigo || 'NÃO TEM ARTIGO') 
 });

 // Parametros em query (rota/rota?canal=nome)
 app.get("/query", (req, res) => {
    const canal = req.query["canal"]
    res.send(canal) 
 });
 
 // Inicia servidor; localhost:4000
app.listen(4000, (err) => {
    if(err) {
        console.log('OCORREU UM ERRO')
    } else {
        console.log('Sucesso!')
    }
})

```

# Nodemon
## O que é?
Reinicia o server em toda modificação do projeto.

## Instalação
npm install nodemon -g

## Uso
```nodemon index.js```

# MYSQL
## O que é?
Sistema de gerenciamento de banco de dados
## Instalação
-mysql.com/downloads/ -> Community server
-Server Only
-Develop machine

## Uso
- Adicionar ProgramFiles/MySQL/bin nas pastas do sistema
- Cmd: mysql -h localhost -u root -p
- (-h = host, -u = user, -p = senha)
  
## Comandos

```sql
    SHOW DATABASES; // Mostrar todas as bases de dados

    CREATE DATABASE sistemaDeCadastro; // Criar base de dados

    USE sistemaDeCadastro; // Usar base de dados

    SHOW TABLES; // Mostrat tabelas

    CREATE TABLE usuarios( // Criar tabela
        nome VARCHAR(50),
        email VARCHAR(100),
        idade INT
    );

    DESCRIBE usuarios; // Estrutura da tabela

    INSERT INTO usuarios(nome, email, idade) VALUES(
        "GABRIEL MARINHO", "email@teste.com", 19
    );

    SELECT * FROM usuarios; // Selecionar todos dados da tabela

    SELECT * FROM usuarios WHERE idade = 8; // Selecionar com condição
    SELECT * FROM usuarios WHERE idade = "Victor";
    SELECT * FROM usuarios WHERE idade >= 15;

    DELETE FROM usuarios WHERE nome = "GABRIEL MARINHO"; // Deleta registro com determinado nome (sem WHERE deleta toda a tabela)

    UPDATE usuarios SET nome = "LUCAS"; // Todos os registros mudarão nome;

    UPDATE usuarios SET nome = "LUCAS" WHERE nome = "GABRIEL MARINHO"; // Atualiza o usuario com esse nome
```

# EJS (EBEDDED JAVASCRIPT)

## O que é?
Motor de template, desenha os arquivos html e permite utilização de código JS dentro do html.

## Instalação
```npm install ejs --save```

## Configuração
```javascript
const express = require("express");
// ...
app.set('view engine', 'ejs');
app.use(express.static('public')); // Usar arquivos estáticos da pasta public

app.get("/:nome", (req, res) => {
    const dados = {};
    const nome = req.params.nome;
    res.render("views/index.ejs", {
        dados;
        nome;
    });
});

app.listen(6060)

```

## Uso

### Partials (componentes):
```html
    <%- include ('partials/header.ejs') %>
```

### Exibir variáveis:
```html
    <%= nome %>
```

### Condicionais:
```html
<% if (true) {%>
    <h3>Mensagem</h3>
<%} else {%>
    <h4>Else</h4>
<%}%>
```

### Estruturas de repetição:
```html
    <% lista.forEach((item) => { %>
        <%= item.valor %>
    <% }) %>
```

# Bootstrap
## O que é?

# Sequelize
## O que é?
Auxilia manipulação de bancos de dados através do node.

## Instalação
```
npm install --save sequelize
npm install --save mysql2
```

## Conexão com MYSQL
Criar arquivo database/database.js
```js
    const Sequelize = require('sequelize');
    const connection = new Sequelize('nomedobanco', 'root', 'senha', {
        host: 'localhost',
        dialect: 'mysql',
    }); // Criar no Mysql workbench
    module.exports = connection;
```

index.js
```js
    const connection = require("./database/database");
    connection.athenticate().then(() => {
        console.log('SUCESSO');
    }).catch(e => {
        console.log(e);
    });

```

## Criação de MODEL (TABELA);

```JS
// database/Perguntas
const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("pergunta", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {
  console.log("Tabela criada!");
});

module.exports = Pergunta;

```

```JS
// index.js
    const Pergunta = require('./database/Pergunta'); // Só instanciar já faz o model ser criado, se ele não existir.
```

## Salvamento de linhas:

```JS
app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  Pergunta.create({ titulo: titulo, descricao: descricao }).then(() => {
    res.redirect("/");
  });
});
```

## Listagem de linhas: 

```JS
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true }).then((perguntas) => {
    res.render("index", {
      perguntas,
    });
  });
});

```