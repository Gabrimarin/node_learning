mysql -h localhost -u root -p;

SHOW DATABASES;

CREATE DATABASE sistemaDeCadastro;

USE sistemaDeCadastro;

SHOW TABLES;

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

DESCRIBE usuarios;

INSERT INTO usuarios(nome, email, idade) VALUES(
    "GABRIEL MARINHO",
    "gabriel@email.com",
    19
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "MARIA ELENA",
    "maria@email.com",
    20
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "JESUS CRISTO",
    "jesus@email.com",
    2021
);

SELECT * FROM usuarios WHERE idade = 8;

SELECT * FROM usuarios WHERE idade > 8;

DELETE FROM usuarios WHERE nome = "Victor";

UPDATE usuarios SET nome = "Nome Novo", email = "Emailnovo@gmail.com" WHERE nome = "GABRIEL MARINHO"; 