const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user: 'laura',
    password: 'admin123',
    database: 'agenda-petshop',
})

module.exports = conexao;