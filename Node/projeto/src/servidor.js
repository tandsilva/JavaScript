const porta = 3003

//const { request } = require('express')
const express = require('express')
//toda requisicao sera tranformada em objeto
const bodyParser = require('body-parser')


//ATRIBUIDO o express a variavel app e sobre ela atribuiremos servicos
const app = express()
const bancoDeDados = require('../bancoTipolista')
app.use(bodyParser.urlencoded({ extended: true }))
//app ponto use atende todas as requisicoes
 app.get('/produtos', (req, res, next) => {
     res.send(
         bancoDeDados.getProdutos()
     )
 })

 app.get('/produtos/:id', (req, res, next) => {
     res.send(bancoDeDados.getProduto(req.params.id))
 })
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})


app.listen(porta, () => {
    console.log(`Servicao topzera portal brabo${porta}.`)
})
