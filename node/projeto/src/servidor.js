const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))  //qualquer requisição usando express vai passar por aqui e se no corpo tiver urlencoded(x-www-urlencoded)

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())  // vai converter para json automaticamente (metodo send)
})


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  // vai gerar um json
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  // vai gerar um json
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)

})



app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
