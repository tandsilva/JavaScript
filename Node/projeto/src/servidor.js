const porta = 3003

//const { request } = require('express')//eh um modulo do node responsavel por startar o projeto
const express = require('express')
//toda requisicao sera tranformada em objeto
const bodyParser = require('body-parser')


//ATRIBUIDO o express a variavel app e sobre ela atribuiremos servicos
const app = express()

//apartir daqui todos as funcoes contidas na classe bancoTipolistas sera acessada pela variavel local bancoDeDados
const bancoDeDados = require('../bancoTipolista')
app.use(bodyParser.urlencoded({ extended: true }))
//app ponto use atende todas as requisicoes
 app.get('/produtos', (req, res, next) => {
     res.send(
         bancoDeDados.getProdutos()
     )
 })
//o get eh um tipo de requisicao
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
