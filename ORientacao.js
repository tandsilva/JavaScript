const produto = new Object


produto.nome = 'Cadeira'

produto['marca do produto'] = 'Generica'//para fazer detalhamento
produto.preco = 220
console.log(produto)

const RobodeGuerra = {
    modelo: 'BRT001',
    valor: 89000,
    proprietario:{
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro:'rua Futuro',
            numero :123


        }
    },
    construtores: [{
        nome: 'junior',
        idade: 35
    }, {
        nome:'ana',
        idade: 45
        
    }],
    callcaulaValor: function(){

    }
}

RobodeGuerra.proprietario.endereco.numero = 1000
//RobodeGuerra['proprietario']['endereco']['numero'] = 'Ao infinito e Alem'
//console.log(RobodeGuerra)

//delete RobodeGuerra.construtores

delete RobodeGuerra.proprietario.endereco
//delete RobodeGuerra.callcaulaValor//pode -se usar o delete ate para funcoes
console.log(RobodeGuerra)