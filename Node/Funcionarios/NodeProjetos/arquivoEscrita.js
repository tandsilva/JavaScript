const fs = require('fs')

const produto ={
    nome:'celular',
    preco:123456, 
    desconto:0.15

}

// criou uma callBack ,se der erro retorna o erro senao exibe uma msg de ok
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),erro =>{
    console.log(erro || 'arquivo salvo com sucesso')
})