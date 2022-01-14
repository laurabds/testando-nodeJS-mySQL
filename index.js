const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const mysql = require('mysql2')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'));

    }

})

// ctrl+c derruba o servidor