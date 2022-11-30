//eh isso para tranformar um json em objeto
const carrinho =[
    '{"nome":"borracha","preco":3.45}',
    '{"nome":"chocotones","preco":5.56}',
    '{"nome":"chocotones","preco":6.55}',
    '{"nome":"chocotones","preco":3.99}'
]
//criou uma funcao de conversao que tranforma qualquer JSON em obj
const tranformaObj = TranformaJson =>JSON.parse(TranformaJson)


//eH CRIADA UMA FUNCAO PARA RETORNAR APENAS O PRECO

const apenasPreco = produto =>produto.preco//apartir desta linha ele ja eh um obj e ja 
//se pode acessar suas propriedades

const resultado = carrinho.map(tranformaObj).map(apenasPreco)//aqui ela esta usando a funcao map usando dois parametros tratados
console.log(resultado)


const resultado1 = carrinho.map(tranformaObj)
//console.log(resultado1)//retornando apenas o objeto