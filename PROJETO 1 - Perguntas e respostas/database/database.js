const Sequelize = require('sequelize');

const connection = new Sequelize('perguntas', 'root', 'zats1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;