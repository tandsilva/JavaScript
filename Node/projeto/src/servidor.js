const porta = 3003

const { request } = require('express')
const express = require('express')
//ATRIBUIDO o express a variavel app e sobre ela atribuiremos servicos
const app =express()

app.get('/produtos',(req,res,next)=>{
    res.send({
        nome:'Notebroca',preco:123.36
    })
})

app.listen(porta,()=>{
    console.log(`Servicao topzera portal brabo${porta}.`)
})
