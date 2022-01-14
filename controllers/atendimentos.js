module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um get'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('você está na rota de atendimentos e está realizando um post')

    })
}

/*module.exports = () => {
    const app = express() 
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    consign()
        .include('controllers')
        .into(app)
    return app 
}
*/